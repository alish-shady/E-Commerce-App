import { FaUser, FaRegStar } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
export default function AccountDropdown() {
  const navigate = useNavigate();
  const { logoutUser } = useUserContext();
  return (
    <div className="text-Button2 bg-Primary absolute top-full right-0 flex w-max cursor-auto flex-col gap-4 rounded-sm px-4 py-2 text-sm shadow-2xl">
      <div
        onClick={() => navigate("/account")}
        className="hover:text-HoverButton2 flex shrink-0 cursor-pointer items-center gap-4"
      >
        <FaUser />
        <span>Manage my account</span>
      </div>
      <div
        onClick={() => navigate("/ratedproducts")}
        className="hover:text-HoverButton2 flex shrink-0 cursor-pointer items-center gap-4"
      >
        <FaRegStar />
        <span>My reviews</span>
      </div>
      <div
        onClick={logoutUser}
        className="hover:text-HoverButton2 flex shrink-0 cursor-pointer items-center gap-4"
      >
        <RxExit />
        <span>Logout</span>
      </div>
    </div>
  );
}
