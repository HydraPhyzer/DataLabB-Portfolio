import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import Details from "../Details";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  let navigate = useNavigate();
  const RouteChange = (ID) => {
    navigate("/case-studies/" + ID + "/details");
  };

  return (
    <div className="min-h-[50rem] md:py-24 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.6] bg-dot-black/[0.2] relative flex gap-y-5 flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="text-white relative text-center py-12 flex gap-y-12 flex-col">
        <h1 className="text-white font-bold text-lg md:text-2xl lg:text-5xl justify-self-start relative">
          Case Studies
        </h1>

        <p className="text-xs md:text-md lg:text-lg text-center px-4">
          Witness The Impact From The Successful Implementation Of Our Projects.
        </p>
      </div>

      {Details.map((EachDetail, Index) => {
        return (
          <div
            key={Index}
            className={`flex flex-col ${
              Index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } md:justify-evenly  md:space-x-5 space-y-5 text-justify sm:h-[40vh] h-auto relative md:mb-32 p-4`}
          >
            <div className="md:w-[40%]">
              <img
                src={EachDetail?.Image}
                className="w-full rounded-md"
                alt="Crane GPT"
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
              <p className="sm:text-base text-xs">{EachDetail?.Description}</p>
              <button
                className="text-start w-max md:p-2 md:px-4 p-1 px-3 bg-white text-black text-xs md:text-base rounded-full flex items-center gap-x-2 group hover:bg-blue-500 hover:text-white transition-all ease-in-out"
                onClick={() => {
                  RouteChange(EachDetail?.Title);
                }}
              >
                Let's Dive In
                <TiLocationArrow className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudies;
