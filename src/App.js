import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Routes/HomePage";
import CartPage from "./Components/CartPage";
import ProductsPage from "./Components/ProductsPage";
import NotFound from "./Components/NotFound/NotFound";
import WishlistPage from "./Components/WishlistPage/WishlistPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import MessageBanner from "./Components/MessageBanner/MessageBanner";
import ContactPage from "./Components/ContactPage/ContactPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register/Register";

function App() {
  const { messageBanner } = useContext(DataContext);
  return (
    <div className="font-roboto bg-mainColor">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cartpage" element={<CartPage />} />
        <Route path="wishlistpage" element={<WishlistPage />} />
        <Route path="productspage" element={<ProductsPage />} />
        <Route path="productpage/:productId" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {messageBanner ? <MessageBanner /> : null}
      <Footer />
    </div>
  );
}

export default App;
