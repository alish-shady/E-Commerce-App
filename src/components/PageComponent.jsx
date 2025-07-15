import Footer from "./Footer";
import Header from "./Header";

export default function PageComponent({ children }) {
  return (
    <>
      <main className="bg-Primary text-Text1 flex flex-col gap-4 px-16 pb-8">
        <Header />
        <div className="py-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
