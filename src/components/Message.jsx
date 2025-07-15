import { useRef, useState } from "react";
import TextInput from "./TextInput,";
import WarnUser from "./WarnUser";
import emailjs from "emailjs-com";
import LoadingDots from "./LoadingDots";
import { useUserContext } from "../contexts/UserContext";
export default function Message() {
  const form = useRef();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { userId, userEmail } = useUserContext();
  async function sendEmail(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { YourName, YourEmail, SubjectofYourMessage, YourMessage } =
        Object.fromEntries(new FormData(form.current));
      const templateParams = {
        email: YourEmail,
        message: YourMessage,
        title: SubjectofYourMessage,
        name: YourName,
      };
      const allValuesPresent = Object.values(templateParams).every((value) => {
        return value !== "";
      });
      if (!allValuesPresent)
        throw new Error("Please fill all of the input fields of the form.");
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      if (res.status === 200) setError("Your message has been sent!");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }
  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="border-Secondary shadow-Secondary grid gap-4 rounded-2xl p-4 shadow-md md:grid-cols-2 xl:grid-cols-3"
    >
      <TextInput type="Your Name" />
      {userId ? (
        <TextInput type="Your Email" value={userEmail} setter={() => null} />
      ) : (
        <TextInput type="Your Email" />
      )}
      <TextInput type="Subject of Your Message" />
      <textarea
        name="YourMessage"
        className="bg-Secondary text-size-e min-h-44 resize-none rounded-sm p-2 focus:outline-0 md:col-span-2 xl:col-span-3"
        placeholder="Your Message"
      ></textarea>
      {error && <WarnUser message={error} />}
      <button className="hover:text-Button2 bg-Button2 text-Text hover:bg-Text text-size-e relative cursor-pointer justify-self-end rounded-sm border p-2 duration-200 md:col-span-2 xl:col-span-3">
        {isLoading ? (
          <div className="bg-Primary border-Button2 absolute top-0 right-0 flex h-full w-full items-center justify-center border backdrop-blur-xs">
            <LoadingDots />
          </div>
        ) : (
          ""
        )}
        Send Message
      </button>
    </form>
  );
}
