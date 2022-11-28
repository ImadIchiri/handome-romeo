import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-white">
      <div className="container bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex justify-center items-center min-h-[120px]">
            <h1 className="text-3xl text-center font-medium py-4 text-mainColor">
              Luxury clothes
            </h1>
          </div>
          <div className="flex-1 flex justify-center items-center min-h-[120px]">
            <h1 className="text-3xl text-center font-medium py-4 text-mainColor">
              New fashion
            </h1>
          </div>
          <div className="flex-1 flex justify-center items-center min-h-[120px]">
            <h1 className="text-3xl text-center font-medium py-4 text-mainColor">
              Best Quality
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
