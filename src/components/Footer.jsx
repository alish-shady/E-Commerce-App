import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-Button text-Text flex w-full flex-col justify-self-end">
      <div className="flex w-full items-start justify-center gap-28 px-16 py-8">
        <div className="max-w-32">
          <img src="/logo.png" alt="Logo" className="size-full" />
        </div>
        <div className="max-w-72">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-2xl font-semibold">E-Commerce</h2>
            </li>
            <li>
              <p className="text-sm">Designed & Built by Ali Shapoori</p>
            </li>
            <li>
              <div>
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <div className="flex items-center gap-4">
                  <span className="cursor-pointer">
                    <MdEmail className="text-2xl" />
                  </span>
                  <span className="cursor-pointer">
                    <FaGithub className="text-2xl" />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="max-w-72">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-2xl font-semibold">About the Project</h2>
            </li>
            <li className="text-sm">
              <p>Product data provided by the FakeStoreAPI</p>
              <a href="https://fakestoreapi.com/" target="blank">
                <p>fakestoreapi.com</p>
              </a>
            </li>
            <li>
              <div>
                <h3 className="text-lg font-semibold">
                  This Project is a Portfolio Piece!
                </h3>
                <h4 className="text-sm">
                  This is a fictional e-commerce site built for demonstration
                  purposes.
                </h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="max-w-72">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-2xl font-semibold">Page Links</h2>
            </li>
            <li>
              <ul className="flex flex-col gap-1 text-sm">
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
