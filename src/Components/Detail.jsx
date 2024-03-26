import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Details from "../Details";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { PiCompassToolBold } from "react-icons/pi";
import { GiPointySword } from "react-icons/gi";

const Detail = () => {
  const { caseid } = useParams();
  let [EachDetail, setEachDetail] = useState({});
  useEffect(() => {
    Details.map((item) => {
      if (item.Title === caseid) {
        setEachDetail(item);
      }
    });
  }, [caseid]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <Header />
      <div className="h-auto text-black flex flex-col md:py-32 py-12 mx-auto md:space-y-32 space-y-12 w-[90vw] md:w-[70vw]">
        <div className="flex justify-start">
          <div className="flex items-center justify-between flex-col md:flex-row gap-y-12">
            <div className="md:w-[50%] rotate-6 hover:rotate-0 transition-all ease-out p-1 rounded-md border-2 border-gray-400">
              <img
                src={EachDetail?.Image}
                className="w-full rounded-md"
                alt={EachDetail?.Title}
                style={{ height: "100%" }}
              />
            </div>

            <div
              className="text-black md:w-[40%] w-full flex flex-col justify-between space-y-5 h-full"
              style={{ height: "100%" }}
            >
              {" "}
              <h1 className="mb-2 text-xl md:text-xl lg:text-2l xl:text-4xl font-bold tracking-tight text-gray-700">
                {EachDetail?.Title}
              </h1>
              <p className="sm:text-base text-xs text-justify">
                {EachDetail?.Description}
              </p>
              <p className="sm:text-base text-xs text-justify">
                <span className="font-semibold ">Keywords: </span>
                {EachDetail?.Keywords}
              </p>
            </div>
          </div>
        </div>

        <section className="flex items-start justify-between flex-col md:flex-row space-y-12 md:space-y-0">
          <div className="space-y-12">
            <div className="flex items-center gap-x-5">
              <TbTriangleSquareCircleFilled className="md:h-24 md:w-24 w-12 h-12 text-black" />
              <h1 className="text-xl md:text-xl lg:text-2l xl:text-4xl text-black font-bold">
                Challenges
              </h1>
            </div>
            <ul className="flex flex-col gap-y-6 md:ml-32 ml-6 self-end sm:text-base text-xs">
              {EachDetail?.Challenges?.map((item) => (
                <li className="text-black list-disc">{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-12">
            <div className="flex items-center gap-x-5">
              <PiCompassToolBold className="md:h-24 md:w-24 w-12 h-12 text-black" />
              <h1 className="text-xl md:text-xl lg:text-2l xl:text-4xl text-black font-bold">
                Tools Used
              </h1>
            </div>
            <ul className="flex flex-col gap-y-6 md:ml-32 ml-6 self-end sm:text-base text-xs">
              {EachDetail?.Tools?.map((item) => (
                <li className="text-black list-disc">{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
