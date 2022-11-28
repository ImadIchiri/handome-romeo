import React from "react";
import { Link } from "react-router-dom";
import HerroImage from "../../assets/images/herro-image-1.png";

const HeroSection = () => {
  return (
    <section>
      <div className="container h-[calc(100vh_-_100px)] relative bg-mainColor flex items-center justify-between md:flex-row">
        <div className="flex-1 px-4 py-8 absolute bg-[#0a1a3745] h-full w-full flex flex-col justify-center items-center md:relative md:bg-transparent">
          <h1 className="font-roboto text-white font-extralight text-4xl text-center leading-[1.6] md:text-start">
            Our mission is to help
            <span className="text-6xl block font-italiana">
              You Look Handsome
            </span>
          </h1>
          <Link
            to="/productspage"
            className="text-2xl uppercase bg-secondaryColorLight text-white py-4 px-8 mt-8 opacity-95 hover:opacity-100 ease-in-out"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex-1 h-[calc(100vh_-_100px)] max-h-full">
          <img
            className="object-cover min-w-full h-[calc(100vh_-_100px)] max-h-[100%] block mx-auto"
            src={HerroImage}
            alt="The Hndsome Romeo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
