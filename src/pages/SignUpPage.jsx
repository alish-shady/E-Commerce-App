import Form from "../components/Form";
import formimage from "../assets/images/form-image.png";
import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import PageComponent from "../components/PageComponent";
export default function SignUp() {
  const { clearUserStatus } = useUserContext();
  useEffect(() => clearUserStatus(), [clearUserStatus]);
  return (
    <PageComponent>
      <div className="flex items-center md:justify-center">
        <img src={formimage} className="size-2/5 md:hidden lg:flex" alt="" />
        <Form type="signup" />
      </div>
    </PageComponent>
  );
}
