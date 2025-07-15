import { FaSadTear } from "react-icons/fa";
export default function Error({ message }) {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-16 py-16">
      <div className="flex w-full items-center justify-center gap-4">
        <FaSadTear className="text-Secondary2 text-size-f" />
        <h1 className="font-bold md:text-base xl:text-3xl">{message}</h1>
        <FaSadTear className="text-Secondary2 text-size-f" />
      </div>
    </div>
  );
}
