import React from "react";
import PM_image from "../assets/PM_image.png";
import slider_img5 from "../assets/slider_img3.svg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="flex flex-col w-full gap-y-4 mt-6">
      <style>
        {`
          p {
            caret-color: transparent;
          }
        `}
      </style>
      <div className="flex  space-x-36 text-white w-50% mt-[50px]">
        <div className="flex  border-gray-300 ml-12 w-50%">
          <div>
            <Link to="/">
              <img
                src={PM_image}
                alt="PM_image"
                width={350}
                height={72}
                loading="lazy"
              />
            </Link>
          </div>
          <div>
            <p className="italic ml-6">
              I dream of a Digital India where quality healthcare percolates
              right up to the remotest regions powered by e-Healthcare.
            </p>
            <p className="font-bold text-1xl ml-6 mt-3 ">Shri Narendra Modi</p>
            <p className="ml-6">Hon’ble Prime Minister of India</p>

            <span class="relative flex h-3 w-3 ml-6 mt-6 ">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-[#138808] "></span>
                </span>
            <div className="flex bg-richblack-800 text-[#138808]  ml-6 w-[175px] pt-1 pb-1 rounded-xl mt-[-10px]">
              
              <p className="text-x font-bold ml-2">Telemedicine Service</p>
            </div>
            <div>
              <p className="mt-6 ml-6 text-3xl">Bridging the Digital Health Divide</p>
              <p className="ml-6 mt-6">
              Sanjeevani.AI - Telemedicine Service of India is a step
                towards digital health equity to achieve Universal Health
                Coverage (UHC). SanjeevaniAi facilitates quick and easy access to
                doctors and medical specialists. You can
                also access quality health services remotely via SanjeevaniAi by
                visiting the nearest Ayushman Bharat Health & Wellness Centre.
              </p>
            </div>
          </div>
        </div>
        <div className="w-50%">
        <img
          src={slider_img5}
          alt="slider_img5"
          width={2400}
          height={1400}
          loading="lazy"
          className="ml-[-63px] animate-slow"
        />



        </div>
      </div>
    </div>
  );
};

export default Home;
