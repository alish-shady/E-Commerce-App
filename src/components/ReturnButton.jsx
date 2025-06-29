import { useNavigate } from "react-router-dom";
export default function ReturnButton({ text = "Return To Shop" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/", { replace: true })}
      className={`cursor-pointer rounded-md border-2 border-red-400 p-4 text-sm transition-all duration-200 hover:bg-red-400 hover:text-white`}
    >
      {text}
    </button>
  );
}
