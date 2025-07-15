import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function AboutMe() {
  return (
    <div className="text-size-e flex flex-col gap-4">
      <h1 className="font-semibold md:text-2xl xl:text-4xl">About Me</h1>
      <p>
        My name is <span className="font-semibold">Ali Shapoori</span>, and I am
        a web developer passionate about creating clean, user-friendly, and
        powerful applications. I'm currently studying at Shamsipour Technical
        and Vocational College and have 21 years of age.
      </p>
      <div className="text-size-d flex items-center gap-2 font-semibold">
        <h2 className="font-semibold">Get in touch:</h2>
        <a
          href="mailto:alishapoori83@gmail.com"
          className="hover:text-Secondary2 duration-100"
        >
          <MdEmail />
        </a>
        <a
          target="_blank"
          href="https://github.com/alish-shady"
          className="hover:text-Secondary2 duration-100"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
