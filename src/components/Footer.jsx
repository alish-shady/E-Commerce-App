import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-Button text-Text mt-auto flex w-full flex-col">
      <div className="flex w-full items-start justify-center px-16 py-8 md:gap-8 lg:gap-16 xl:gap-20 2xl:gap-28">
        <div className="max-w-32 self-center">
          <img src="/logo.png" alt="Logo" className="size-full" />
        </div>
        <div className="md:max-w-36 lg:max-w-44 xl:max-w-60 2xl:max-w-72">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-size-b font-semibold">E-Commerce</h2>
            </li>
            <li>
              <p className="text-size-a">Designed & Built by Ali Shapoori</p>
            </li>
            <li>
              <div>
                <h3 className="text-size-b font-semibold">Get in Touch</h3>
                <div className="text-size-c flex items-center gap-4">
                  <span className="cursor-pointer">
                    <MdEmail />
                  </span>
                  <span className="cursor-pointer">
                    <FaGithub />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:max-w-36 lg:max-w-44 xl:max-w-60 2xl:max-w-72">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-size-b font-semibold">About the Project</h2>
            </li>
            <li className="text-size-a">
              <p>Product data provided by the FakeStoreAPI</p>
              <a href="https://fakestoreapi.com/" target="blank">
                <p>fakestoreapi.com</p>
              </a>
            </li>
            <li>
              <div>
                <h3 className="text-size-b font-semibold">
                  This Project is a Portfolio Piece!
                </h3>
                <h4 className="text-size-a">
                  This is a fictional e-commerce site built for demonstration
                  purposes.
                </h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:max-w-36 lg:max-w-44 xl:max-w-60 2xl:max-w-72">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-size-b font-semibold">Page Links</h2>
            </li>
            <li>
              <ul className="text-size-a flex flex-col gap-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="cart">Cart</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-Primary/40 flex w-full justify-center border-t p-4">
        <p className="text-Primary text-sm opacity-60">
          © 2025 Ali Shapoori. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
