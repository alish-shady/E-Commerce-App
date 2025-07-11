import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import formimage from "../assets/images/form-image.png";
export default function Login() {
  return (
    <>
      <main className="mb-8 flex flex-col gap-4 px-16">
        <Header />
        <div className="flex items-center">
          <img src={formimage} className="size-2/5" alt="" />
          <Form type="login" />
        </div>
      </main>
      <Footer />
    </>
  );
}
