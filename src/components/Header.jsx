import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useCartContext } from "../contexts/CartContext";
import CartModal from "./CartModal";
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import AccountDropdown from "./AccountDropdown";
export default function Header() {
  const { cart } = useCartContext();
  const [showCartModal, setShowCartModal] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const { userId } = useUserContext();
  return (
    <header className="border-b-Button text-Text1 relative z-10 flex w-full justify-between border-b-[0.1px] py-8">
      <h1 className="text-size-c font-montserrat-semibold">
        <Link to="/"> E-Commerce</Link>
      </h1>
      <ul className="text-size-b flex items-center gap-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to={userId ? "/account" : "/signup"}>
            {userId ? "Account" : "Sign Up"}
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <SearchBar />
        <Link to="/cart">
          <div
            className="relative w-full"
            onMouseEnter={() => {
              if (cart.length) {
                setTimeout(() => {
                  setShowCartModal(true);
                }, 500);
              }
            }}
            onMouseLeave={() => {
              setShowCartModal(false);
            }}
          >
            <FaShoppingCart className="text-xl" />
            <span className="bg-Secondary2 text-Primary absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs">
              {cart.length}
            </span>
          </div>
        </Link>
        {userId ? (
          <NavLink
            to="/account"
            onClick={(e) => {
              e.preventDefault();
              setShowAccountDropdown((cur) => !cur);
            }}
            className={({ isActive }) =>
              isActive
                ? "bg-Button1 relative rounded-full p-1"
                : "bg-Secondary relative rounded-full p-1"
            }
          >
            <div>
              <FaUser className="text-Primary text-xl" />
            </div>
            {showAccountDropdown && <AccountDropdown />}
          </NavLink>
        ) : (
          ""
        )}
      </div>
      {showCartModal && (
        <div
          onMouseEnter={() => {
            setShowCartModal(true);
          }}
          onMouseLeave={() => {
            setShowCartModal(false);
          }}
          className="absolute top-1/2 right-0 flex max-h-[60vh] max-w-2/5 flex-col gap-4 overflow-y-scroll rounded-xl bg-white p-4 drop-shadow-xl"
        >
          {cart.map((product) => {
            return <CartModal product={product} key={product.id} />;
          })}
        </div>
      )}
    </header>
  );
}
