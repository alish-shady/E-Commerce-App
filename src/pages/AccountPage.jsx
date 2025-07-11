import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function AccountPage() {
  return (
    <>
      <main className="mb-8 flex flex-col gap-4 px-16">
        <Header />
        <div className="flex w-full items-center justify-center">
          <Profile />
        </div>
      </main>
      <Footer />
    </>
  );
}
