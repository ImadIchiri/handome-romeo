import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import DataContext from "../../Context/DataContext";

const WishlistPage = () => {
  const { wishlistProducts, handleRemoveFromWishlist, handleMessageBanner } =
    useContext(DataContext);

  const handleWishlistRemove = (productId, msgBanner) => {
    handleRemoveFromWishlist(productId);
    handleMessageBanner(msgBanner);
  };

  return (
    <section className="bg-white">
      <div className="container py-10 px-4 min-h-[calc(100vh_-_100px)]">
        <h2 className="text-3xl text-center font-medium">Wishlist page</h2>

        <div className="py-10 flex flex-col items-center space-y-4">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="group relative w-full flex border border-mainColor p-3 max-w-4xl flex-col md:flex-row"
            >
              <button
                onClick={() =>
                  handleWishlistRemove(product.id, "remove_wishlist")
                }
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
                <h3 className="text-2xl mb-6">
                  <Link to={`/productpage/${product.id}`}>{product.title}</Link>
                </h3>
                <h4 className="text-3xl font-medium text-mainColor">
                  Price: $<span>{product.price["new_price"]}</span>
                </h4>
              </div>
            </div>
          ))}

          {wishlistProducts.length ? null : (
            <div className="w-full text-center py-10">
              <h1 className="text-5xl">Your Wishlist Is Empty For Now</h1>
            </div>
          )}

          <div className="w-full text-center text-3xl">
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

export default WishlistPage;
