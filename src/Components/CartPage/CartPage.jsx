import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const CartPage = () => {
  const {
    cardProducts,
    handleRemoveFromCart,
    handleProductQuantityNumber,
    handleMessageBanner,
    priceFormater,
  } = useContext(DataContext);
  const [user] = useAuthState(auth);

  const handleCartRemove = (productId, msgBanner) => {
    handleRemoveFromCart(productId);
    handleMessageBanner(msgBanner);
  };

  const handleTotal = cardProducts.map(
    (item) => item.number * item.price["new_price"]
  );
  return (
    <section className="bg-white">
      <div className="container py-10 px-4 min-h-[calc(100vh_-_100px)]">
        <h2 className="text-3xl text-center font-medium">Shopping Cart</h2>

        <div className="py-10 flex flex-col items-center space-y-4">
          {cardProducts.map((product) => (
            <div
              key={product.id}
              className="group relative w-full flex border border-mainColor p-3 max-w-4xl flex-col md:flex-row"
            >
              <button
                onClick={() => handleCartRemove(product.id, "remove_cart")}
                className="absolute hidden top-4 right-4 text-4xl text-red-600 group-hover:block"
                title="Remove Item"
              >
                <AiFillCloseCircle />
              </button>
              <Link to={`/productpage/${product.id}`}>
                <img
                  className="w-full max-w-[300px] mx-auto mb-3 object-cover border border-mainColor p-1 md:mb-0 md:max-w-[220px]"
                  src={product.images["main_image"]}
                  alt=""
                />
              </Link>
              <div className="flex-1 flex flex-col justify-between pl-4">
                <div className="mb-4">
                  <Link to={`/productpage/${product.id}`}>
                    <h3 className="text-2xl mb-6">{product.title}</h3>
                  </Link>
                  <h4 className="text-3xl font-medium text-mainColor">
                    Price: $
                    <span>{priceFormater(product.price["new_price"])}</span>
                  </h4>
                </div>
                <div className="flex items-center justify-between flex-wrap-reverse">
                  <div className="w-fit flex text-white text-2xl">
                    <button
                      onClick={() =>
                        handleProductQuantityNumber(product.id, "remove")
                      }
                      className="h-[45px] w-[45px] bg-mainColor grid place-content-center"
                    >
                      -
                    </button>
                    <span className="h-[45px] w-[45px] bg-lightBlue grid place-content-center">
                      {product.number}
                    </span>
                    <button
                      onClick={() =>
                        handleProductQuantityNumber(product.id, "add")
                      }
                      className="h-[45px] w-[45px] bg-mainColor grid place-content-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="h-[45px]">
                    <h3 className="text-2xl font-medium">
                      Total: $
                      <span className="">
                        {priceFormater(
                          Number(product.number) *
                            Number(product.price["new_price"])
                        )}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-fit mx-auto flex flex-wrap items-center gap-4">
          {cardProducts.length ? (
            <>
              <div className="relative w-[260px] border border-mainColor">
                <input
                  className="w-full p-2 pr-16"
                  type="text"
                  placeholder="Coupon Code"
                />
                <button className="absolute h-full top-0 right-0 bg-mainColor text-white p-2">
                  Apply
                </button>
              </div>

              <div className="bg-mainColor text-white grid place-content-center text-xl py-2 px-4">
                <h3>
                  Total: $
                  <span>{handleTotal.reduce((acc, curr) => acc + curr)}</span>
                </h3>
              </div>

              {user ? (
                <button className="bg-mainColor text-white flex items-center text-xl py-2 px-4">
                  <h3 className="mr-3">Checkout</h3>
                  <FaShoppingBasket className="mb-1" />
                </button>
              ) : (
                <button className="bg-mainColor text-white flex items-center text-xl py-2 px-4">
                  <h3 className="mr-3">Login to Checkout</h3>
                </button>
              )}
            </>
          ) : (
            <div className="w-full text-center py-10">
              <h1 className="text-5xl">Your Cart Is Empty For Now</h1>
            </div>
          )}

          <div className="w-full text-center my-6">
            <Link
              to="/productspage"
              className="text-xl text-mainColor font-medium text-center hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
