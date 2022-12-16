import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="bg-mainColor">
      <div className="container bg-mainColor text-white px-4 py-16 flex flex-col items-center lg:flex-row">
        <div className="flex flex-col max-w-xs px-4 mb-8 lg:mb-0">
          <img src={LogoImage} alt="Logo In The Footer" className="w-12 mb-3" />
          <p className="text-lg font-normal text-white ">
            E-commerce website contains what will make you look handsome
          </p>
          <div className="flex items-center w-fit mx-auto space-x-3 text-white mt-4">
            <a
              href="https://www.linkedin.com/in/imad-ichiri/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <GrLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com/ImadIchiri"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <FaGithubSquare className="text-4xl scale-110" />
            </a>
            <a
              href="https://www.instagram.com/imad_ichiri/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <FaInstagramSquare className="text-4xl scale-110" />
            </a>
            <a
              href="https://www.facebook.com/imad.ichiri.3"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <GrFacebook className="text-4xl" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-evenly flex-wrap">
          {/* Links #1 */}
          <div className="px-4 min-w-[150px] m-4">
            <h2 className="text-xl mb-3">Useful Links:</h2>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/productspage">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* Links #2 */}
          <div className="px-4 min-w-[150px] m-4">
            <h2 className="text-xl mb-3">Useful Links:</h2>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/productspage">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* Links #3 */}
          <div className="px-4 min-w-[150px] m-4">
            <h2 className="text-xl mb-3">Useful Links:</h2>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/productspage">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
