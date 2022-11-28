import React, { createContext, useEffect, useState } from "react";
import productsData from "../Data/productsData.json";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [cardProducts, setCardProducts] = useState(
    JSON.parse(localStorage.getItem("cardProducts")) || []
  );
  const [wishlistProducts, setWishlistProducts] = useState(
    JSON.parse(localStorage.getItem("wishlistProducts")) || []
  );
  const [messageBanner, setMessageBanner] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("cardProducts", JSON.stringify(cardProducts));
    localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));
  }, [cardProducts, wishlistProducts]);

  // const handleSessionStorage = () => {};

  const handleAddToCart = (product) => {
    const productExist = cardProducts.some(
      (item) => Number(item.id) === Number(product.id)
    );
    let cardProductsList = [];

    if (productExist) {
      cardProductsList = cardProducts.map((item) =>
        Number(item.id) === Number(product.id)
          ? { ...item, number: item.number + 1 }
          : item
      );
    }

    if (!productExist) {
      cardProductsList = [...cardProducts, { ...product, number: 1 }];
    }

    setCardProducts(cardProductsList);
  };

  // Number Of Repition O f A Product In The Cart
  const handleProductQuantityNumber = (id, action) => {
    const newCardProducts = cardProducts.map((item) =>
      Number(item.id) === Number(id)
        ? {
            ...item,
            number:
              action === "add"
                ? item.number + 1
                : action === "remove"
                ? item.number - 1
                : item.number,
          }
        : item
    );

    setCardProducts(newCardProducts.filter((item) => Number(item.number) > 0));
  };

  const handleRemoveFromCart = (id) => {
    const newCardProducts = cardProducts.filter(
      (item) => Number(item.id) !== Number(id)
    );

    setCardProducts(newCardProducts);
  };

  const handleAddToWishlist = (product) => {
    const productExist = wishlistProducts.some(
      (item) => Number(item.id) === Number(product.id)
    );
    let newWishlistProducts = [];

    if (productExist) {
      newWishlistProducts = wishlistProducts.filter(
        (item) => Number(item.id) !== Number(product.id)
      );
    }

    if (!productExist) {
      newWishlistProducts = [...wishlistProducts, { ...product }];
    }

    setWishlistProducts(newWishlistProducts);
  };

  const handleRemoveFromWishlist = (id) => {
    const newWishlistProducts = wishlistProducts.filter(
      (item) => Number(item.id) !== Number(id)
    );

    setWishlistProducts(newWishlistProducts);
  };

  const priceFormater = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const handleMessageBanner = (message) => {
    const messagesObject = {
      add_cart: "Item Added To Cart",
      remove_cart: "Item Removed From Cart",
      add_wishlist: "Item Added To Wishlist",
      remove_wishlist: "Item Removerd From Wishlist",
    };

    setMessageBanner(messagesObject[message]);

    // setTimeout(() => {
    //   setMessageBanner(null);
    // }, 2500);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const value = {
    products,
    setProducts,
    cardProducts,
    setCardProducts,
    handleAddToCart,
    handleRemoveFromCart,
    handleProductQuantityNumber,
    wishlistProducts,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    priceFormater,
    messageBanner,
    handleMessageBanner,
    setMessageBanner,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
