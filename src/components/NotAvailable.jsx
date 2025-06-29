import { FaSadTear } from "react-icons/fa";
import ReturnButton from "./ReturnButton";

export default function NotAvailable() {
  return (
    <div className="my-auto flex w-full flex-col items-center">
      <div className="flex items-center gap-4">
        <FaSadTear className="text-9xl text-red-400" />
        <h1 className="text-6xl font-bold">Product is not available</h1>
      </div>
      <p className="text-base">
        The product you were looking for is not available
      </p>
    </div>
  );
}
