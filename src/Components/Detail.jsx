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
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <div className="bg-black h-auto flex flex-col md:py-32 py-12 mx-auto md:space-y-32 space-y-12 w-[90vw] md:w-[70vw]">
        <div className="flex justify-start">
          <div className="flex items-center justify-between flex-col md:flex-row gap-y-12">
            <div className="md:w-[50%] rotate-6 hover:rotate-0 transition-all ease-out">
              <img
                src={EachDetail?.Image}
                className="w-full rounded-md"
                alt={EachDetail?.Title}
                style={{ height: "100%" }}
              />
            </div>

            <div
              className="text-white md:w-[40%] w-full flex flex-col justify-between space-y-5 h-full"
              style={{ height: "100%" }}
            >
              {" "}
              <h1 className="mb-2 text-xl md:text-xl lg:text-2l xl:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
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
              <TbTriangleSquareCircleFilled className="md:h-24 md:w-24 w-12 h-12 text-white" />
              <h1 className="text-xl md:text-xl lg:text-2l xl:text-4xl text-white font-bold">
                Challenges
              </h1>
            </div>
            <ul className="flex flex-col gap-y-6 md:ml-32 ml-6 self-end sm:text-base text-xs">
              {EachDetail?.Challenges?.map((item) => (
                <li className="text-white list-disc">{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-12">
            <div className="flex items-center gap-x-5">
              <PiCompassToolBold className="md:h-24 md:w-24 w-12 h-12 text-white" />
              <h1 className="text-xl md:text-xl lg:text-2l xl:text-4xl text-white font-bold">
                Tools Used
              </h1>
            </div>
            <ul className="flex flex-col gap-y-6 md:ml-32 ml-6 self-end sm:text-base text-xs">
              {EachDetail?.Tools?.map((item) => (
                <li className="text-white list-disc">{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
