import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../Data/productsData.json";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../Context/DataContext";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsData.find(
    (item) => Number(item.id) === parseInt(productId)
  );
  const {
    handleAddToCart,
    wishlistProducts,
    handleAddToWishlist,
    priceFormater,
    handleMessageBanner,
  } = useContext(DataContext);
  const [imageIndex, setImageIndex] = useState(0);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (!product) return;
    const similarProductsList = productsData.filter(
      (item) => item.category === product.category
    );
    setSimilarProducts(similarProductsList);
  }, [product]);

  if (!product) {
    return (
      <section className="bg-white">
        <div className="container min-h-[calc(100vh_-_100px)] flex justify-center items-center">
          <div>
            <h1 className="text-3xl text-orange font-medium">
              Product N°{productId} Doesn't exist
            </h1>
            <Link
              to="/productspage"
              className="block text-center hover:underline mt-6"
            >
              Go Back To Product List
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const {
    title: productTitle,
    images: { other_images: images },
    description: { text, details },
    price: { old_price: oldOrice, new_price: newPrice },
  } = product;

  const handleLeftClick = () => {
    const cardsWrapper = document.getElementById("cardsWrapper");
    cardsWrapper.scrollLeft -= 200;
  };

  const handleRightClick = () => {
    const cardsWrapper = document.getElementById("cardsWrapper");
    cardsWrapper.scrollLeft += 200;
  };

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
    <section className="bg-white">
      <div className="container p-4 grid grid-cols-1 lg:grid-cols-3">
        <div className="min-w-[300px] max-w-full w-[500px] mx-auto col-span-1">
          <div className="p-4">
            <img
              className="object-cover mx-auto w-full max-w-[400px] h-[420px]"
              src={images[imageIndex]}
              alt=""
            />
          </div>
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <img
                onClick={() => setImageIndex(index)}
                style={{ opacity: index === imageIndex ? "1" : "0.5" }}
                className="w-[60px] h-[80px] object-cover cursor-pointer border-2 border-hotBlue p-1 m-1"
                key={index}
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="p-4 col-span-2">
          <article className="w-fit mx-auto ml-auto flex items-center mb-4 space-x-2">
            <button
              onClick={() => handleWishlistClick(product)}
              className="flex space-x-2 items-center bg-hotBlue text-white py-2 px-3"
            >
              {wishlistProducts.some(
                (item) => Number(item.id) === Number(product.id)
              ) ? (
                <>
                  <AiFillHeart className="text-2xl" />
                  <span>Remove From Wishlist</span>
                </>
              ) : (
                <>
                  <AiOutlineHeart className="text-2xl" />
                  <span>Add To Wishlist</span>
                </>
              )}
            </button>
            <button
              onClick={() => handleCardClick(product, "add_cart")}
              className="flex space-x-2 items-center bg-hotBlue text-white py-2 px-3"
            >
              <BsFillCartPlusFill className="text-2xl" />
              <span>Add To Cart</span>
            </button>
          </article>

          <h2 className="text-3xl text-hotBlue">{productTitle}</h2>

          <div className="mt-4 text-2xl text-hotBlue font-medium">
            <h3>
              Price: $<span>{priceFormater(newPrice)}</span>
            </h3>
          </div>

          <hr className="my-4" />

          <div className="my-4">
            <h3 className="text-xl mb-3">Description:</h3>
            <p className="pl-4">{text}</p>
          </div>

          <ul>
            <h3 className="text-xl mb-3">Details:</h3>
            {details.map((item, index) => (
              <li
                className="group pl-4 flex items-center space-x-2"
                key={index}
              >
                <MdOutlineDone className="group-hover:text-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {similarProducts.length ? (
        <div className="container my-4 py-3 px-2 max-w-full">
          <h2 className="text-4xl mb-3 text-center border w-fit mx-auto border-hotBlue py-2 px-4 hover:text-white hover:bg-hotBlue">
            Similar Products
          </h2>
          <div className="flex items-center">
            <button onClick={handleLeftClick}>
              <FaArrowAltCircleLeft className="text-5xl text-lightBlue" />
            </button>
            <div
              id="cardsWrapper"
              className="flex w-[95%] gap-4 overflow-x-scroll hide-scrollbar mx-4 p-4 bg-lightBlue"
            >
              {similarProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  cardStyle={{
                    flex: "1",
                    minWidth: "200px",
                  }}
                />
              ))}
            </div>
            <button onClick={handleRightClick}>
              <FaArrowAltCircleRight className="text-5xl text-lightBlue" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ProductPage;
