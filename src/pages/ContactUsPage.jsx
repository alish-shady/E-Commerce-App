import PageComponent from "../components/PageComponent";
import Message from "../components/Message";
import ContactInfo from "../components/ContactInfo";
export default function ContactUs() {
  return (
    <PageComponent>
      <div className="flex gap-4 md:flex-col xl:flex-row">
        <ContactInfo />
        <Message />
      </div>
    </PageComponent>
  );
}
