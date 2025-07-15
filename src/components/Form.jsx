import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import WarnUser from "./WarnUser";
import { Link, useNavigate } from "react-router-dom";
import LoadingDots from "./LoadingDots";
export default function Form({ type }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signUpUser, loginUser, userId, isLoading, error } = useUserContext();
  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, [userId, navigate]);
  function handleSubmit(e) {
    e.preventDefault();
    if ((type === "signup" && !name) || !email || !password) {
      return null;
    }
    if (type === "signup") signUpUser(name, email, password);
    else loginUser(email, password);
  }
  return (
    <>
      <form className="text-size-e relative flex shrink-0 flex-col gap-8 rounded-2xl p-16 md:shadow-lg lg:ml-auto lg:w-max lg:shadow-none xl:w-1/3">
        {isLoading || userId ? (
          <div className="bg-Primary/30 absolute top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-xs">
            <LoadingDots />
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold md:text-3xl lg:text-2xl">
            {type === "signup" ? "Create your account" : "Login to E-Commerce"}
          </h1>
          <p>Enter your credentials below</p>
        </div>
        <div className="flex flex-col gap-4">
          {type === "signup" && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-Text2 border-b p-2 focus:outline-0"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-Text2 border-b p-2 focus:outline-0"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-Text2 border-b p-2 focus:outline-0"
          />
        </div>
        {error && <WarnUser message={error} />}
        <div className="flex w-full">
          <button
            onClick={handleSubmit}
            className="hover:text-Button2 bg-Button2 text-Text hover:bg-Text grow cursor-pointer rounded-sm border py-2 duration-200"
          >
            {type === "signup" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="flex gap-2">
          {type === "signup" && (
            <>
              <p className="text-Text2">Already have an account?</p>
              <Link to="/login">
                <span
                  className={`border-b-Text2 border-b ${type === "login" && "text-Secondary2 ml-auto"}`}
                >
                  Log in
                </span>
              </Link>
            </>
          )}
        </div>
      </form>
    </>
  );
}
