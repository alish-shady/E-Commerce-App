import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import { FaShoppingCart } from "react-icons/fa";
export default function SignUp() {
  return (
    <>
      <main className="mb-8 flex flex-col gap-4 px-16">
        <Header />
        <div className="flex">
          <FaShoppingCart className="text-Secondary2 my-auto text-[512px]" />
          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
}
