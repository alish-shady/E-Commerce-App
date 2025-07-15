import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineDataObject } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";

export default function TechnologyStack() {
  return (
    <div className="my-8 flex flex-col gap-4">
      <h1 className="font-montserrat-semibold md:text-2xl xl:text-4xl">
        Technologies Used
      </h1>
      <div className="text-size-e grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="border-Text2 hover:bg-Button2 hover:text-Primary flex justify-between rounded-md border p-2 duration-100">
          <div className="flex flex-col">
            <h2 className="text-size-d font-montserrat-semibold">Front-End</h2>
            <div className="flex flex-col indent-4">
              <span>React</span>
              <span>React-router</span>
              <span>Tailwind</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 self-end md:text-2xl xl:text-4xl">
            <FaReact />
            <SiReactrouter />
            <RiTailwindCssFill />
          </div>
        </div>
        <div className="border-Text2 hover:bg-Button2 hover:text-Primary flex justify-between rounded-md border p-2 duration-100">
          <div className="flex flex-col">
            <h2 className="text-size-d font-montserrat-semibold">
              State Management
            </h2>
            <div className="flex flex-col indent-4">
              <span>React Context API (global)</span>
            </div>
          </div>
          <MdOutlineDataObject className="self-end md:text-2xl xl:text-4xl" />
        </div>
        <div className="border-Text2 hover:bg-Button2 hover:text-Primary flex justify-between rounded-md border p-2 duration-100">
          <div className="flex flex-col">
            <h2 className="text-size-d font-montserrat-semibold">
              Back-End / Database
            </h2>
            <div className="flex w-full flex-col indent-4">
              <span>Firebase authentication</span>
              <span>Firestore database</span>
            </div>
          </div>
          <IoLogoFirebase className="self-end md:text-2xl xl:text-4xl" />
        </div>
        <div className="border-Text2 hover:bg-Button2 hover:text-Primary flex justify-between rounded-md border p-2 duration-100">
          <div className="flex flex-col">
            <h2 className="text-size-d font-montserrat-semibold">
              External APIs
            </h2>
            <div className="flex w-full flex-col indent-4">
              <span>FakeStoreAPI</span>
              <span>EmailJS</span>
            </div>
          </div>
          <FaGears className="self-end md:text-2xl xl:text-4xl" />
        </div>
      </div>
    </div>
  );
}
