import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <div className="relative flex w-full items-center">
      <FaMagnifyingGlass className="absolute right-4" />
      <input
        type="text"
        className="rounded-sm bg-gray-100 p-1 focus:outline-0"
      />
    </div>
  );
}
