import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { FiUpload } from "react-icons/fi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as XLSX from "xlsx";
import PopUp from "../../../PopUps/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { addQuestionToTopic } from "../../../../redux/collage/test/testSlice";

const Header = ({ type, sectionId, qt, topicId, view }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [excel, setExcel] = useState("");
  const [excelJSON, setExcelJSON] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const ques = searchParams.get("question");
  console.log(ques);
  const { currentTopic } = useSelector((state) => state.test);
  const handleFile = (e) => {
    setVisible(true);
    const types = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
      "application/vnd.ms-excel.sheet.macroEnabled.12",
      "application/vnd.ms-excel.template.macroEnabled.12",
      "application/vnd.ms-excel.addin.macroEnabled.12",
      "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
    ];
    let file = e.target.files[0];
    if (file && types.includes(file.type)) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        setExcel(e.target.result);
      };
    } else {
      window.alert("invalid file type");
    }
  };
  const upload = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (excel !== "" && excel !== undefined) {
      const workbook = XLSX.read(excel, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];

      // const data = XLSX.utils.sheet_to_json(worksheet);
      const range = XLSX.utils.decode_range(worksheet["!ref"]);
      let data = [];
      let jsonData = [];
      switch (currentTopic.Type) {
        case "mcq":
          console.log(range);

          for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
            for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) {
              const row =
                worksheet[XLSX.utils.encode_cell({ r: rowNum, c: colNum })];

              let header =
                worksheet[XLSX.utils.encode_cell({ r: 0, c: colNum })];
              if (header.v === "option") {
                let OpArr = jsonData[rowNum].Options || [];
                jsonData[rowNum] = {
                  ...jsonData[rowNum],
                  Options: [...OpArr, row.v],
                };
              } else {
                jsonData[rowNum] = {
                  ...jsonData[rowNum],
                  [header.v]: row.v,
                  section: currentTopic._id,

                  id: Date.now() + currentTopic._id,
                };
              }
            }
          }
          setExcelJSON(jsonData.slice(1));

          await dispatch(
            addQuestionToTopic({
              data: jsonData.slice(1),
              type: "mcq",
              isMultiple: true,
              id: currentTopic._id,
            })
          );
          navigate(-1);
          break;

        case "findAnswer":
          for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
            for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) {
              const row =
                worksheet[XLSX.utils.encode_cell({ r: rowNum, c: colNum })];

              let header =
                worksheet[XLSX.utils.encode_cell({ r: 0, c: colNum })];
              if (header.v === "option") {
                let OpArr = jsonData[rowNum].Options || [];
                jsonData[rowNum] = {
                  ...jsonData[rowNum],
                  questions: [...OpArr, row.v],
                };
              } else {
                jsonData[rowNum] = {
                  ...jsonData[rowNum],
                  [header.v]: row.v,
                  id: Date.now() + currentTopic._id,
                  section: currentTopic._id,
                };
              }
            }
          }
          setExcelJSON(jsonData.slice(1));

          await dispatch(
            addQuestionToTopic({
              data: jsonData.slice(1),
              type: "findAnswer",
              isMultiple: true,
              id: currentTopic._id,
            })
          );
          navigate(-1);
          break;

        case "essay":
          for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
            for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) {
              const row =
                worksheet[XLSX.utils.encode_cell({ r: rowNum, c: colNum })];

              let header =
                worksheet[XLSX.utils.encode_cell({ r: 0, c: colNum })];

              jsonData[rowNum] = {
                ...jsonData[rowNum],
                [header.v]: row.v,
                id: Date.now() + currentTopic._id,
                section: currentTopic._id,
              };
            }
          }
          setExcelJSON(jsonData.slice(1));

          await dispatch(
            addQuestionToTopic({
              data: jsonData.slice(1),
              type: "essay",
              isMultiple: true,
              id: currentTopic._id,
            })
          );
          navigate(-1);
          break;

        default:
          break;
      }

      setVisible(false);
    } else {
      setVisible(false);
    }
  };
  return (
    <div className="flex w-11/12 mx-auto justify-between mb-2 mt-5">
      {visible && (
        <PopUp
          visible={visible}
          handleSave={handleUpload}
          handleOverlay={() => {
            upload.current.value = "";
            setVisible(false);
          }}
        />
      )}

      <div>
        <button className="flex self-center  rounded-lg  gap-2">
          <button
            onClick={() => {
              type === "section" && navigate("/collage/test/questions");
              type === "topic" && navigate("/collage/test/select");
              type === "assessment" && navigate(-1);
            }}
            className="mt-2 mr-3"
          >
            <FaChevronLeft className=" p-3 rounded-lg h-10 w-10 self-center bg-gray-200" />
          </button>

          <div className="">
            <h2 className="sm:text-xl  text-left font-bold self-center text-3xl font-dmSans ">
              {ques?ques:'Create Assessment'}
            </h2>
            <h2 className="text-xs font-bold text-gray-400 text-left">
              Edit Screen
            </h2>
          </div>
        </button>
      </div>

      <div className="rounded-xl mx-2   h-12 flex my-2 ">
        {type !== "assessment" && view !== "false" && (
          <div className=" flex gap-2">
            <button
              className="self-center justify-center flex bg-[#F8F8F9] py-3  rounded-xl w-32  gap-2 "
              onClick={() =>
                type === "section"
                  ? navigate(
                      `/collage/test/${
                        qt === "mcq"
                          ? "addMcq"
                          : qt === "findAnswer"
                          ? "find-ans"
                          : qt === "compiler"
                          ? "code"
                          : qt === "essay"
                          ? "essay"
                          : qt === "video"
                          ? "video"
                          : "addMcq"
                      }/${id}?addType=test&topicId=${topicId}`
                    )
                  : navigate(`/collage/test/typeOfQuestions/${sectionId}`)
              }
            >
              <FiPlus className="self-center text-lg " /> Add
            </button>

            {type === "topic" &&
              currentTopic.Type !== "compiler" &&
              currentTopic.Type !== "video" && (
                <button
                  className="self-center justify-center flex bg-blue-700 py-3  rounded-xl w-48 text-white  gap-2 "
                  onClick={() => {
                    upload.current.click();
                  }}
                >
                  <input
                    type="file"
                    ref={upload}
                    className="hidden"
                    onChange={handleFile}
                  />
                  <FiUpload className="self-center text-lg " /> Upload Questions
                </button>
              )}

            <button className="bg-[#F8F8F9] self-center  rounded-lg  w-10 sm:h-11 sm:w-14">
              <PiSlidersHorizontalLight className="mx-auto sm:h-8 sm:w-8 h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
