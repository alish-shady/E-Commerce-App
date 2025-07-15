import PageComponent from "../components/PageComponent";
import ReturnButton from "../components/ReturnButton";
export default function NotFound() {
  return (
    <PageComponent>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-8 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-size-f font-montserrat-semibold">
            404 Not Found
          </h1>
          <p className="text-size-d">
            The page you were looking for does not exist!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-size-d">You can return to the HomePage:</p>
          <ReturnButton />
        </div>
      </div>
    </PageComponent>
  );
}
