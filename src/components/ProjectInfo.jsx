import aboutusimage from "../assets/images/AboutUs-image.png";
export default function ProjectInfo() {
  return (
    <div className="flex w-full justify-between">
      <div className="text-size-e flex flex-col gap-4">
        <h1 className="font-montserrat-semibold md:text-2xl xl:text-4xl">
          The Project's Story
        </h1>
        <div>
          <h2 className="text-size-d font-montserrat-semibold">
            Project Purpose
          </h2>
          <p>
            React E-Commerce Project is a feature-rich, front-to-back web
            application designed to demonstrate modern web development
            practices, mostly focused on the front-end.
          </p>
        </div>
        <div>
          <h2 className="text-size-d font-montserrat-semibold">Key Features</h2>
          <p>
            Key features include user authentication, a persistent shopping cart
            backed by a cloud database, dynamic product listing, filtering and
            sorting, a unique details page for each product and a full user
            account management page.
          </p>
        </div>
        <div>
          <h2 className="text-size-d font-montserrat-semibold">Project Goal</h2>
          <p>
            The goal of this project was to build and showcase a complete,
            real-world application from scratch, focusing on and highlighting
            front-end skills using Reactjs and tailwind but also utilizing
            firebase services to make the project feature complete.
          </p>
        </div>
      </div>
      <img className="w-2/5 md:hidden xl:block" src={aboutusimage} alt="" />
    </div>
  );
}
