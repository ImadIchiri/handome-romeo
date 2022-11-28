import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import MultiRangeSlider from "multi-range-slider-react";
import DataContext from "../../Context/DataContext";

const FilterProducts = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  filterParams,
  setFilterPrams,
}) => {
  const { products } = useContext(DataContext);
  const colorsList = [
    ...new Set(products.reduce((acc, curr) => curr.colors.concat(acc), [])),
  ];

  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="absolute py-12 px-3 top-0 left-0 z-10 translate-x-[-100%] w-[250px] h-fit bg-hotBrown text-white lg:sticky lg:translate-x-[0]">
      <div>
        <h2 className="text-3xl mb-4">Category</h2>
        <ul className="space-y-2">
          <li className="w-fit text-base font-light hover:underline">
            <Link to={"/productspage"}>All</Link>
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className="w-fit text-base font-light hover:underline"
            >
              <Link to={`/productspage?category=${category.toLowerCase()}`}>
                {`${category[0].toUpperCase()}${category
                  .slice(1)
                  .toLowerCase()}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4">
        <p className="text-center mb-1">
          ${minValue} - ${maxValue}
        </p>
        <MultiRangeSlider
          min={0}
          max={16000}
          minValue={0}
          maxValue={16000}
          onInput={(ChangeResult) => {
            setMinValue(ChangeResult.minValue);
            setMaxValue(ChangeResult.maxValue);
          }}
          onChange={(ChangeResult) => {
            setMinValue(ChangeResult.minValue);
            setMaxValue(ChangeResult.maxValue);
          }}
          label={false}
          ruler={false}
          step={1600}
          barLeftColor="white"
          barInnerColor="#16263D"
          barRightColor="white"
          thumbLeftColor="#16263D"
          thumbRightColor="#16263D"
          className="border-none shadow-none p-4 rounded-none"
        />
      </div>

      <div>
        <h2 className="text-3xl my-4">Colors</h2>
        <div className="flex flex-wrap justify-start">
          <button
            onClick={() =>
              setFilterPrams({ ...filterParams, color: undefined })
            }
            className="h-[30px] w-[30px] mr-1 relative"
          >
            <AiFillCloseSquare className="text-[37px] absolute top-[-4px] left-[-4px]" />
          </button>
          {colorsList.map((color, index) => (
            <button
              key={index}
              onClick={() => setFilterPrams({ ...filterParams, color: color })}
              className="h-[30px] w-[30px] mr-1 mb-1"
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
