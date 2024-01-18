import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FaCircle, FaDotCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ChartComp = () => {
  const navigate = useNavigate();
  const [placements, setPlacements] = useState([1, 2, 3, 4, 5, , 9, 9, 6]);
  const [settings, setSettings] = useState({
    options: {
      responsive: [
        {
          breakpoint: 400,

          options: {
            chart: {
              height: 300,
            },
            grid: {
              padding: {
                right: 0,
              },
            },
          },
        },
      ],
      chart: {
        height: 300,
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
        horizontalAlign: "left",
        offsetX: 10,
        offsetY: 10,
      },
      grid: {
        show: true,
        padding: {
          right: 20,
        },
        xaxis: {
          borderColor: "#00FFFFFF",
          lines: {
            show: true, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: false, //or just here to disable only y axis
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Students",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 19, 100, 55, 20],
      },
      {
        name: "Placements",
        data: [5, 15, 55, 50, 69, 70, 74, 96, 100, 55, 33, 77],
      },
    ],
  });
  return (
    <div className="sm:flex  mt-6 bg-gray-100 w-[98.3%] rounded-lg gap-6  justify-center relative">
      {/* chart component */}
      <div className=" w-3/4  rounded-s sm:px-6 mt-2">
        <div className="md:p-2 flex justify-between">
          <h2 className="font-extrabold text-lg ">RESULTS OVERVIEW</h2>{" "}
          <span className="flex gap-4 text-sm font-bold">
            <button className="border-2 border-x-transparent border-transparent text-blue-600 border-b-blue-700">
              Week
            </button>
            <button>Month</button>
            <button>Quarter</button>
            <button>Year</button>
          </span>
        </div>

        <div className="">
          <Chart
            className="bg-white shadow-md mt-2 rounded-lg h-20"
            options={settings.options}
            series={settings.series}
            type="line"
            width={"100%"}
            responsive={[
              {
                breakpoint: 500,

                options: {},
              },
            ]}
          />
          <div className="flex gap-4 my-4">
            <span className="flex gap-1">
              <FaCircle className="text-blue-400" />{" "}
              <h2 className="font-bold text-xs">Student</h2>
            </span>
            <span className="flex gap-1">
              <FaCircle className="text-green-400" />{" "}
              <h2 className="font-bold text-xs">Placements</h2>
            </span>
          </div>
        </div>
      </div>
      {/* placements */}
      <div className=" sm:w-[23%]  bg-gray-100 rounded-e    font-dmSans">
        <span className="flex justify-between sm:px-2 mb-4 mt-4 ">
          <h1 className="font-extrabold text-lg ">Recent Placements</h1>
          <h1
            className="text-blue-500 hover:cursor-pointer"
            onClick={() => navigate("/collage/dashboard/students")}
          >
            See all
          </h1>
        </span>

        <div className="bg-white  overflow-y-scroll h-[33rem] rounded-lg ">
          {placements?.map((placement) => {
            return (
              <div className="card card-side shadow-sm mb-1 h-20 p-2 ">
                <figure className="w-14 h-14 rounded mt-2">
                  <img
                    src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                  />
                </figure>
                <div className="ml-2">
                  <h2 className=""></h2>
                  <p className="text-base">name</p>
                  <p className="text-xs text-gray-400">company</p>
                  <FaStar className="inline-block text-sm text-amber-500" />
                  <p className="inline-block pl-2 text-sm ">date</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChartComp;
