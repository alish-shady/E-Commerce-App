import PageComponent from "../components/PageComponent";
import Profile from "../components/Profile";

export default function AccountPage() {
  return (
    <PageComponent>
      <div className="flex h-full w-full items-center justify-center">
        <Profile />
      </div>
    </PageComponent>
  );
}
