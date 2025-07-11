import { useUserContext } from "../contexts/UserContext";
import ReturnButton from "./ReturnButton";

export default function CartEmpty() {
  const { userId } = useUserContext();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="text-8xl font-bold">
          {userId ? "Cart is Empty!" : "You are not logged in!"}
        </h1>
        <p className="text-sm">
          {userId
            ? "You have not picked any product to buy!"
            : "Create an account or if you already have one just sign in!"}
        </p>
      </div>
      <ReturnButton />
    </div>
  );
}
