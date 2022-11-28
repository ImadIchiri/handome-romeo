import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BiCurrentLocation } from "react-icons/bi";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <section className="bg-white">
      <div className="container py-24 px-4 flex flex-col-reverse items-center md:flex-row">
        <div className="flex-1 border-[4px] border-secondaryColor py-24 px-8 space-y-8 w-full max-w-2xl md:py-24 md:mr-2">
          <h2 className="text-3xl text-mainColor">Contact Infos :</h2>
          <div className="border-l-2 border-secondaryColor pl-2">
            <h3 className="text-3xl text-mainColor mb-3">Phone</h3>
            <p className="flex items-center space-x-4">
              <BsFillTelephoneFill className="text-2xl text-mainColor" />
              <a className="text-2xl text-mainColor" href="tel:+212 677-628617">
                +212 677-628617
              </a>
            </p>
          </div>
          <div className="border-l-2 border-secondaryColor pl-2">
            <h3 className="text-3xl text-mainColor mb-3">Email</h3>
            <p className="flex items-center space-x-4">
              <HiMail className="text-2xl text-mainColor" />
              <a
                className="text-2xl text-mainColor"
                href="mailto:ichiri02imad@gmail.com"
              >
                ichiri02imad@gmail.com
              </a>
            </p>
          </div>
          <div className="border-l-2 border-secondaryColor pl-2">
            <h3 className="text-3xl text-mainColor mb-3">Location</h3>
            <p className="flex items-center space-x-4">
              <BiCurrentLocation className="text-2xl text-mainColor" />
              <span className="text-2xl text-mainColor">
                Casablanca, Morocco
              </span>
            </p>
          </div>
          <div className="flex items-center w-fit mx-auto space-x-3 text-mainColor">
            <a
              href="https://www.facebook.com/imad.ichiri.3"
              target="_blank"
              rel="noreferrer"
            >
              <GrFacebook className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/imad_ichiri/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare className="text-4xl scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/imad-ichiri/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com/ImadIchiri"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="text-4xl scale-110" />
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-[2] px-4 py-12 bg-mainColor space-y-4 w-full max-w-4xl"
        >
          <h2 className="text-3xl text-white">Send a Message :</h2>
          <div className="relative overflow-hidden">
            <label className="absolute left-[-999999px]" htmlFor="fullName">
              FullName:
            </label>
            <input
              className="w-full py-3 px-4 text-xl"
              type="text"
              id="fullName"
              placeholder="FullName"
            />
          </div>
          <div className="relative overflow-hidden">
            <label className="absolute left-[-999999px]" htmlFor="fullName">
              Email:
            </label>
            <input
              className="w-full py-3 px-4"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="relative overflow-hidden">
            <label className="absolute left-[-999999px]" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full py-3 px-4 text-xl resize-none h-40"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button className="bg-secondaryColorLight font-light text-2xl text-white px-8 py-3 opacity-90 hover:opacity-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
