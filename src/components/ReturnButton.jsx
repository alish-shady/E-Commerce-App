import { useNavigate } from "react-router-dom";
export default function ReturnButton({ text = "Return To Shop" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/", { replace: true })}
      className={`border-Button2 hover:bg-Button2 hover:text-Text text-size-e cursor-pointer rounded-md border-2 p-4 transition-all duration-200`}
    >
      {text}
    </button>
  );
}
