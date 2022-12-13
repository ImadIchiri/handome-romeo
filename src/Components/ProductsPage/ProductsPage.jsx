import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DataContext from "../../Context/DataContext";
import FilterProducts from "../FilterProducts/FilterProducts";
import ProductsList from "../ProductsList/ProductsList";

const ProductsPage = () => {
  const { products } = useContext(DataContext);
  const maxPrice = Math.max(
    ...new Set(products.map((item) => item.price["new_price"]))
  );
  const minPrice = Math.min(
    ...new Set(products.map((item) => item.price["new_price"]))
  );
  const [filtredList, setFilteredList] = useState([]);
  const [searchParams] = useSearchParams();
  const [filterParams, setFilterPrams] = useState({
    category: undefined,
    price: { min: minPrice, max: maxPrice },
    color: undefined,
  });

  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const productsCategory = searchParams.get("category");

  useEffect(() => {
    setFilterPrams({
      category: productsCategory ? productsCategory : undefined,
      price: {
        min: minValue,
        max: maxValue,
      },
      color: undefined,
    });
  }, [searchParams, minValue, maxValue, products, productsCategory]);

  useEffect(() => {
    let tempList = [...products];

    if (filterParams.category) {
      tempList = tempList.filter((item) => {
        return (
          item.category.toLowerCase() === filterParams.category.toLowerCase()
        );
      });
    }

    if (filterParams.price.min || filterParams.price.max) {
      tempList = tempList.filter(
        (item) =>
          item.price["new_price"] >= filterParams.price.min &&
          item.price["new_price"] <= filterParams.price.max
      );
    }

    if (filterParams.color) {
      tempList = tempList.filter((item) =>
        item.colors.includes(filterParams.color)
      );
    }

    setFilteredList(tempList);
  }, [products, filterParams]);

  return (
    <section className="container min-h-[calc(100vh_-_100px)] bg-mainColor">
      {/* <div className="flex flex-col hide-scrollbar max-h-[100vh] py-20 relative overflow-x-hidden overflow-y-scroll lg:flex-row"> */}
      <div className="flex flex-col py-20 relative lg:flex-row">
        <FilterProducts
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          filterParams={filterParams}
          setFilterPrams={setFilterPrams}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <ProductsList filtredList={filtredList} />
      </div>
    </section>
  );
};

export default ProductsPage;
