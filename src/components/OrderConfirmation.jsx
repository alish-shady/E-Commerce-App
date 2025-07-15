import { FaStar } from "react-icons/fa6";
import ReturnButton from "./ReturnButton";
export default function OrderConfirmed() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-x-8">
          <FaStar className="text-size-f text-yellow-400" />
          <h1 className="text-size-f font-montserrat-semibold flex justify-center gap-2">
            Thank you for your purchase!
          </h1>
          <FaStar className="text-size-f text-yellow-400" />
        </div>
        <p className="text-size-e">
          This is a demo site and no real order was placed
        </p>
      </div>
      <ReturnButton />
    </div>
  );
}
