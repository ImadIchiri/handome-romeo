import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProductsList = ({ filtredList }) => {
  return (
    <motion.div
      layout
      className="relative h-max flex-1 px-4 hide-scrollbar grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {filtredList?.length ? (
        <>
          <AnimatePresence>
            {filtredList.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </AnimatePresence>
        </>
      ) : (
        <div className="absolute w-full h-max top-0 left-0 text-center py-20 text-white">
          <h2 className="text-3xl mb-6">
            No product to show in this category!
          </h2>
          <Link to="/productspage" className="text-xl underline">
            See All Products
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default ProductsList;
