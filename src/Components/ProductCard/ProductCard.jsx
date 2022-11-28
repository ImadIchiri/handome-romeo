import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import DataContext from "../../Context/DataContext";
import { motion } from "framer-motion";

const ProductCard = (product) => {
  const {
    handleAddToCart,
    wishlistProducts,
    handleAddToWishlist,
    priceFormater,
    handleMessageBanner,
  } = useContext(DataContext);

  const {
    id: itemId,
    title: productTitle,
    images: { main_image: mainImage },
    price: { old_price: oldPrice, new_price: newPrice },
  } = product;

  const handleCardClick = (product, msgBanner) => {
    handleAddToCart(product);
    handleMessageBanner(msgBanner);
  };

  const handleWishlistClick = (product) => {
    const existInWishList = wishlistProducts.some(
      (item) => Number(item.id) === Number(product.id)
    );
    const msgBanner = existInWishList ? "remove_wishlist" : "add_wishlist";

    handleMessageBanner(msgBanner);
    handleAddToWishlist(product);
  };
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white w-full flex flex-col"
      style={product.cardStyle ? { ...product.cardStyle } : null}
    >
      <div className="group p-3 relative flex-1">
        <Link to={`/productpage/${itemId}`}>
          <img
            className="w-full min-h-[270px] object-cover"
            src={mainImage}
            alt=""
          />
        </Link>
        <div className="absolute scale-0 top-0 left-0 h-full w-full bg-[#16263d4d] flex justify-center items-center group-hover:scale-100">
          <Link
            to={`/productpage/${itemId}`}
            className="bg-hotBlue text-xl text-white py-2 px-4 shadow-sm shadow-white text-center"
          >
            Product page
          </Link>
          <div className="absolute w-full bottom-2 flex justify-between items-center px-3">
            <button
              onClick={() => {
                handleWishlistClick(product);
              }}
              className="h-[38px] w-[38px] rounded-full flex justify-center items-center bg-white"
              title="Add To Wishlist"
            >
              {wishlistProducts.some(
                (item) => Number(item.id) === Number(product.id)
              ) ? (
                <AiFillHeart className="text-2xl text-hotBlue" />
              ) : (
                <AiOutlineHeart className="text-2xl text-hotBlue" />
              )}
            </button>
            <button
              onClick={() => handleCardClick(product, "add_cart")}
              className="h-[38px] w-[38px] rounded-full flex justify-center items-center bg-white"
              title="Add To Cart"
            >
              <BsFillCartPlusFill className="text-2xl text-hotBlue" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-4 px-3 min-h-[168px] flex flex-col justify-between felx-1">
        <h3
          className="font-medium min-h-[84px] text-xl mb-4"
          title={productTitle}
        >
          <Link to={`/productpage/${itemId}`} className="hover:text-orange">
            {productTitle.length > 60
              ? `${productTitle.substring(0, 60)}...`
              : productTitle}
          </Link>
        </h3>
        <div className="flex items-baseline flex-wrap-reverse">
          <span className="mr-3 text-3xl text-hotBlue font-bold">
            <Link to={`/productpage/${itemId}`}>
              ${priceFormater(newPrice)}
            </Link>
          </span>
          <span className="text-xl text-[#455666] line-through">
            ${priceFormater(oldPrice)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
