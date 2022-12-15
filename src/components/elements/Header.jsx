import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import CategoriesMenu from "./CategoriesMenu";
import SearchBar from "../searchBar/SearchBar";
import { deviceSizes as ds } from "../../helpers/variables";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Header() {
  const { user } = UserAuth();
  const isLaptop = useMediaQuery({ query: `(min-width: ${ds.md})` });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white fixed w-[99.115vw] top-0 z-10">
      <div className=" container mx-auto h-[4.5rem] flex items-center justify-between">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-center text-xs font-semibold"
        >
          <GiHamburgerMenu size={32} />
          MENU
        </button>

        <Link to="/" className="h-3/4">
          <img className="h-full" src={Logo} />
        </Link>

        {isLaptop && <SearchBar />}

        {!user || Object.keys(user).length === 0 ? (
          <div className="flex gap-4 items-center font-semibold">
            <Link to="/login" className="">
              Login
            </Link>
            <span className="cursor-default">|</span>
            <Link to="/signup" className="font-semibold">
              Sign Up
            </Link>
          </div>
        ) : (
          <Link to="/account">
            <MdAccountCircle size={38} />
          </Link>
        )}

        <Link to="/cart">
          <FaShoppingCart size={33} />
        </Link>

        {isMenuOpen && (
          <CategoriesMenu closeMenu={() => setIsMenuOpen(false)} />
        )}
      </div>
    </div>
  );
}
