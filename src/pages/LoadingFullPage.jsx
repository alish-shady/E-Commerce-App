import LoadingDots from "../components/LoadingDots";
import PageComponent from "../components/PageComponent";

export default function LoadingFullPage() {
  return (
    <PageComponent>
      <div className="flex h-[50vh] w-full items-center">
        <LoadingDots />
      </div>
    </PageComponent>
  );
}
