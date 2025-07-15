import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function ContactInfo() {
  return (
    <div className="border-Secondary shadow-Secondary flex flex-col justify-center rounded-2xl p-4 shadow-md">
      <div className="text-size-e flex flex-col gap-2 border-b py-4">
        <h1 className="text-size-d flex items-center gap-2">
          <div className="bg-Secondary2 text-Primary rounded-full p-2">
            <FaPhoneAlt />
          </div>
          <span>Call Us</span>
        </h1>
        <p>We are available 24/7, 7 days a week</p>
        <p>Phone: +88888888</p>
      </div>
      <div className="text-size-e flex flex-col gap-2 py-4">
        <h1 className="text-size-d flex items-center gap-2">
          <div className="bg-Secondary2 text-Primary rounded-full p-2">
            <IoIosMail />
          </div>
          <span>Write to Us</span>
        </h1>
        <p>Fill out this form and we will contact you within 24 hours</p>
        <p>email1: customer@e-commerce.gmail.com</p>
        <p>email2: support@e-commerce.gmail.com</p>
      </div>
    </div>
  );
}
