import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import DataContext from "../../Context/DataContext";
import { MdLogin, MdLogout } from "react-icons/md";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../../Context/AuthContext";

function Header() {
  const { cardProducts, wishlistProducts } = useContext(DataContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { signUserOut } = useAuthContext();
  const navBarLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/productspage" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
  ];

  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#B68B60" : "transparent",
    };
  };

  const handleLogOut = async () => {
    try {
      await signUserOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div id="Header" className="relative z-30">
        <div className="container relative px-4 h-[100px] bg-mainColor flex justify-between items-center">
          <div id="Logo" className="">
            <Link to="/">
              <img src={Logo} alt="Logo Of The Website" />
            </Link>
          </div>

          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            onBlur={() => setIsNavOpen(false)}
            className="absolute top-[116px] right-4 z-40 lg:hidden bg-hotBrown"
          >
            {isNavOpen ? (
              <FaWindowClose className="text-white text-5xl" />
            ) : (
              <CgMenuGridR className="text-white text-5xl" />
            )}
          </button>

          {/* Small Screens NavBar */}
          <nav
            style={{ transform: isNavOpen ? "scaleY(1)" : "scaleY(0)" }}
            className="bg-lightBlue absolute top-[100px] left-0 w-full flex-1 flex flex-col justify-center items-center text-xl text-white space-y-6 py-6 transform scale-y-0 duration-[350ms] ease-in-out origin-top lg:hidden"
          >
            {navBarLinks.map(({ title, path }, index) => (
              <NavLink
                key={`${index}-${title}`}
                to={path}
                style={navLinkStyle}
                className="px-4 py-2"
              >
                {title}
              </NavLink>
            ))}
          </nav>

          {/* Large Screens NavBar */}
          <nav className="hidden w-full flex-1 flex-row justify-center items-center text-xl text-white bg-transparent py-0 mx-6 space-x-6 lg:flex">
            {navBarLinks.map(({ title, path }, index) => (
              <NavLink
                key={`${index}-${title}`}
                to={path}
                style={navLinkStyle}
                className="px-4 py-2"
              >
                {title}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Link
                to="/wishlistPage"
                className="bg-white h-12 w-12 flex justify-center items-center"
                title="Wishlist"
              >
                <AiOutlineHeart className="text-4xl text-hotBrown" />
              </Link>
              {wishlistProducts.length ? (
                <span className="text-2xl min-w-12 w-12 h-12 grid place-content-center bg-secondaryColor text-white">
                  {wishlistProducts.length}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <Link
                to="/cartpage"
                className="bg-white h-12 w-12 flex justify-center items-center"
                title="Cart"
              >
                <AiOutlineShoppingCart className="text-4xl text-hotBrown" />
              </Link>
              {cardProducts.length ? (
                <span className="text-2xl min-w-12 w-12 h-12 grid place-content-center bg-secondaryColor text-white">
                  {cardProducts.reduce(
                    (acc, curr) => Number(acc) + Number(curr.number),
                    0
                  )}
                </span>
              ) : null}
            </div>
            <div>
              {!user ? (
                <Link
                  to="login"
                  className="bg-white h-12 w-12 flex justify-center items-center"
                  title="Cart"
                >
                  <MdLogin title="Log In" className="text-4xl text-hotBrown" />
                </Link>
              ) : (
                <button
                  onClick={handleLogOut}
                  className="bg-white h-12 w-12 flex justify-center items-center"
                  title="Logout"
                >
                  <MdLogout
                    title="Log Out"
                    className="text-4xl text-hotBrown"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
