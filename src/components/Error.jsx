import { FaSadTear } from "react-icons/fa";
export default function Error({ message }) {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-16 py-16">
      <div className="flex w-full items-center justify-center gap-4">
        <FaSadTear className="text-Secondary2 text-6xl" />
        <h1 className="text-2xl font-bold">{message}</h1>
      </div>
    </div>
  );
}
