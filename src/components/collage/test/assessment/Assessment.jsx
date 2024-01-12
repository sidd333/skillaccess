import React, { useState } from "react";
import Header from "./Header";
import { FaFolder } from "react-icons/fa";
import { ImFileText } from "react-icons/im";
import { LiaStopwatchSolid } from "react-icons/lia";
import { PiPencilSimpleLine } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import Chart from "react-apexcharts";

const Assessment = () => {
  const [settings, setSettings] = useState({
    options: {
      chart: {
        background: "",
      },

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              },
              total: {
                show: true,
              },
            },
          },
        },
      },
      series: [44, 55, 13, 33],
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
      formatter: function (val) {
        return val + "%";
      },
    },
  });
  return (
    <div className="font-dmSans text-sm font-bold">
      <Header />
      <span className="flex gap-2 w-[97%] mx-auto px-2 ">
        <FaFolder className="text-blued w-5 h-5" />
        <h2 className="text-xs">Beginner Level</h2>
      </span>

      <h2 className="flex gap-2 w-[95.6%] mx-auto px-2 bg-gray-100 p-3 my-2 rounded-lg tracking-wide [word-spacing:.1rem]">
        Create the first things for your platform
      </h2>

      {/* small screen charts*/}
      <div className="   md:hidden md:w-[40%] ">
        <div className=" !rounded-lg ">
          <Chart
            className="bg-gray-100 rounded-lg"
            options={settings.options}
            series={settings.options.series}
            type="donut"
            height={400}
            responsive={[
              {
                breakpoint: 500,

                options: {},
              },
            ]}
          />

          <Chart
            className="bg-gray-100 rounded-lg mt-2"
            options={{
              chart: {
                type: "bar",
              },

              series: [
                {
                  data: [
                    {
                      x: "category A",
                      y: 10,
                    },
                    {
                      x: "category B",
                      y: 18,
                    },
                    {
                      x: "category C",
                      y: 13,
                    },
                  ],
                },
              ],
            }}
            series={[
              {
                data: [23, 34, 12, 54, 32, 43],
              },
            ]}
            type="bar"
            height={200}
            responsive={[
              {
                breakpoint: 500,

                options: {},
              },
            ]}
          />
        </div>
      </div>

      {/* larger screens */}
      <div className="  w-[95.6%] mx-auto  my-2 rounded-lg tracking-wide justify-between flex ">
        <div className="md:w-[58%] grid grid-cols-6 row-span-2 gap-x-10 gap-y-3 p-3 bg-gray-100 rounded-lg border border-blued h-28">
          {" "}
          <div className="col-span-2 ">
            <h2 className="self-center text-xs sm:text-sm">UX-Test Basics</h2>
          </div>
          <div className="col-span-2 ">
            <span className="flex gap-1">
              <ImFileText className="text-blued self-center " />
              <p className="self-center text-xs text-gray-500   sm:text-sm">
                Multiple Choice Questions
              </p>
            </span>
          </div>
          <div className="col-span-1 ">
            <div className="flex gap-1 ">
              <LiaStopwatchSolid className="self-center text-gray-500 w-5 h-5" />
              <p className="text-gray-400 text-xs self-center">10 mins</p>
            </div>
          </div>
          <div className="col-span-1  flex justify-center">
            <RxCross1 className="self-center text-red-600 w-5 h-5" />
          </div>
          <div className="col-span-4 line-clamp-2 text-xs font-normal text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum praesentium sapiente consectetur deserunt qui non eius, nam,
            quia, odit facere? Quia, iste! Totam sunt, nulla nostrum fuga enim
            repudiandae.
          </div>
          <div className="col-span-1  flex">
            <button className="self-center justify-center bg-gray-200 p-2 rounded-lg text-xs">
              Details
            </button>
          </div>
          <div className="col-span-1  flex justify-center">
            <PiPencilSimpleLine className="self-center text-blued w-5 h-5" />
          </div>
        </div>

        <div className="  hidden md:block w-[40%] ">
          <div className=" !rounded-lg  ">
            <Chart
              className="bg-gray-100 rounded-lg"
              options={settings.options}
              series={settings.options.series}
              type="donut"
              height={400}
              width={"100%"}
              responsive={[
                {
                  breakpoint: 500,

                  options: {},
                },
              ]}
            />

            <Chart
              className="bg-gray-100 rounded-lg mt-2"
              options={{
                chart: {
                  type: "bar",
                },

                series: [
                  {
                    data: [
                      {
                        x: "category A",
                        y: 10,
                      },
                      {
                        x: "category B",
                        y: 18,
                      },
                      {
                        x: "category C",
                        y: 13,
                      },
                    ],
                  },
                ],
              }}
              series={[
                {
                  data: [23, 34, 12, 54, 32, 43],
                },
              ]}
              type="bar"
              height={400}
              width={"100%"}
              responsive={[
                {
                  breakpoint: 500,

                  options: {},
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
