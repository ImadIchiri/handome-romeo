import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DataContext from "../../Context/DataContext";
import FilterProducts from "../FilterProducts/FilterProducts";
import ProductsList from "../ProductsList/ProductsList";

const ProductsPage = () => {
  const { products } = useContext(DataContext);
  const [filtredList, setFilteredList] = useState([]);
  const [searchParams] = useSearchParams();
  const [filterParams, setFilterPrams] = useState({
    category: undefined,
    price: { min: 0, max: 16000 },
    color: undefined,
  });

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(16000);

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
  }, [searchParams, minValue, maxValue, products]);

  useEffect(() => {
    let tempList = [...products];

    if (filterParams.category) {
      tempList = tempList.filter(
        (item) => item.category === filterParams.category
      );
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
  }, [filterParams]);

  return (
    <section className="container min-h-[calc(100vh_-_100px)] bg-mainColor">
      <div className="hide-scrollbar max-h-[100vh] py-20 relative overflow-x-hidden overflow-y-scroll lg:flex">
        <FilterProducts
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          filterParams={filterParams}
          setFilterPrams={setFilterPrams}
        />
        <ProductsList filtredList={filtredList} />
      </div>
    </section>
  );
};

export default ProductsPage;
