import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="relative flex w-full items-center">
      <FaMagnifyingGlass className="absolute right-4" />
      <input
        type="text"
        className="rounded-sm bg-gray-100 p-1 focus:outline-0"
        value={searchParams.get("query") ?? ""}
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set("query", e.target.value);
            return prev;
          })
        }
        onBlur={() => {
          setSearchParams((prev) => {
            prev.delete("query");
            return prev;
          });
        }}
      />
    </div>
  );
}
