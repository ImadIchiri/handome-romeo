import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="">
      <div className="container h-[calc(100vh_-_100px)] min-h-[600px] bg-hotBlue flex flex-col justify-center items-center">
        <h1 className="text-8xl text-center text-lightBrown my-12">
          Ooops! <br /> Page Not Found !
        </h1>
        <p className="text-3xl text-white">
          Go back to the{" "}
          <Link className="text-orange underline" to="/">
            HomePage
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
