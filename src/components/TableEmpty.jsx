import { useUserContext } from "../contexts/UserContext";
import ReturnButton from "./ReturnButton";

export default function TableEmpty({ type = "cart" }) {
  const { userId } = useUserContext();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="text-size-f font-montserrat-semibold">
          {type === "cart" &&
            (userId ? "Cart is Empty!" : "You are not logged in!")}
          {type === "reviews" && "No Reviewed Product!"}
        </h1>
        <p className="text-size-e">
          {type === "cart" &&
            (userId
              ? "You have not picked any product to buy!"
              : "Create an account or if you already have one just sign in!")}
          {type === "reviews" && "You have not rated any product!"}
        </p>
      </div>
      <ReturnButton />
    </div>
  );
}
