import React from "react";
import WatchesCategory2 from "../../assets/images/watches-category-2.png";
import SuiteCategory1 from "../../assets/images/suits-category-1.png";
import JeansCategory from "../../assets/images/jeans-category.png";
import JacketCategory1 from "../../assets/images/jacket-category-1.png";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section>
      <div className="bg-lightBlue py-16 px-6">
        <h1 className="text-6xl text-white font-italiana">Our Categories</h1>

        <div className="my-8 grid gap-6 grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Start Card */}
          <div className="relative group col-span-2 lg:col-span-2">
            <div className="absolute top-0 left-0 w-full h-full bg-[#98582c99] flex justify-center items-center transition-transform ease-in-out duration-500 scale-0 group-hover:scale-100">
              <Link
                to="/productspage?category=watches"
                className="max-w-full text-2xl text-hotBrown bg-white px-12 py-3"
              >
                Watches
              </Link>
            </div>
            <img className="w-full h-full" src={WatchesCategory2} alt="" />
          </div>

          {/* Start Card */}
          <div className="relative group row-span-2">
            <div className="absolute top-0 left-0 w-full h-full bg-[#98582c99] flex justify-center items-center transition-transform ease-in-out duration-500 scale-0 group-hover:scale-100">
              <Link
                to="/productspage?category=suits"
                className="max-w-full text-2xl text-hotBrown bg-white px-12 py-3"
              >
                Suits
              </Link>
            </div>
            <img className="w-full h-full" src={SuiteCategory1} alt="" />
          </div>

          {/* Start Card */}
          <div className="relative group">
            <div className="absolute top-0 left-0 w-full h-full bg-[#98582c99] flex justify-center items-center transition-transform ease-in-out duration-500 scale-0 group-hover:scale-100">
              <Link
                to="/productspage?category=jeans"
                className="max-w-full text-2xl text-hotBrown bg-white px-12 py-3"
              >
                Jeans
              </Link>
            </div>
            <img className="w-full h-full" src={JeansCategory} alt="" />
          </div>

          {/* Start Card */}
          <div className="relative group">
            <div className="absolute top-0 left-0 w-full h-full bg-[#98582c99] flex justify-center items-center transition-transform ease-in-out duration-500 scale-0 group-hover:scale-100">
              <Link
                to="/productspage?category=jackets"
                className="max-w-full text-2xl text-hotBrown bg-white px-12 py-3"
              >
                Jackets
              </Link>
            </div>
            <img className="w-full h-full" src={JacketCategory1} alt="" />
          </div>
        </div>

        <Link
          to="/productspage"
          className="block w-fit mx-auto text-2xl uppercase bg-secondaryColorLight opacity-90 text-white py-4 px-8 mt-8 hover:opacity-100"
        >
          Discover more
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
