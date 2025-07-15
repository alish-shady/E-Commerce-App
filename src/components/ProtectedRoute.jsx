import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { userId } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) navigate("/", { replace: true });
  }, [userId, navigate]);

  return userId ? children : null;
}
