import AboutMe from "../components/AboutMe";
import PageComponent from "../components/PageComponent";
import ProjectInfo from "../components/ProjectInfo";
import TechnologyStack from "../components/TechnologyStack";
export default function AboutUs() {
  return (
    <PageComponent>
      <ProjectInfo />
      <TechnologyStack />
      <AboutMe />
    </PageComponent>
  );
}
