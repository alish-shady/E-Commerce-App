import { FaSadTear } from "react-icons/fa";
import ReturnButton from "./ReturnButton";

export default function NotAvailable() {
  return (
    <div className="my-auto flex w-full flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <FaSadTear className="text-Secondary2 text-size-f" />
        <h1 className="text-size-f font-montserrat-semibold">
          Product is not available
        </h1>
        <FaSadTear className="text-Secondary2 text-size-f" />
      </div>
      <p className="text-size-e">
        The product you were looking for is not available
      </p>
    </div>
  );
}
