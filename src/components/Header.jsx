import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex w-full justify-between border-b-[1px] border-b-gray-200 py-8">
      <h1 className="text-2xl font-bold">
        <Link to="/"> E-Commerce</Link>
      </h1>
      <ul className="flex items-center gap-8">
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
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <SearchBar />
        <FaShoppingCart />
      </div>
    </header>
  );
}
