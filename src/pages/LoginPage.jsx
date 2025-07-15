import Form from "../components/Form";
import formimage from "../assets/images/form-image.png";
import { useUserContext } from "../contexts/UserContext";
import { useEffect } from "react";
import PageComponent from "../components/PageComponent";
export default function Login() {
  const { clearUserStatus } = useUserContext();
  useEffect(() => clearUserStatus(), [clearUserStatus]);
  return (
    <PageComponent>
      <div className="flex items-center justify-center">
        <img src={formimage} className="size-2/5 md:hidden lg:flex" alt="" />
        <Form type="login" />
      </div>
    </PageComponent>
  );
}
