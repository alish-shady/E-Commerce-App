import Footer from "../components/Footer";
import Header from "../components/Header";
import ReturnButton from "../components/ReturnButton";
export default function NotFound() {
  return (
    <>
      <main className="mb-8 flex flex-col gap-4 px-16">
        <Header />
        <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-8 py-16">
          <h1 className="text-8xl font-bold">404 Not Found</h1>
          <p className="text-base">
            The page you were looking for does not exist!
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base">You can return to the HomePage:</p>
            <ReturnButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
