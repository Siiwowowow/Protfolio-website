import Image from "next/image";
import Banner from "./Components/Banner";
import About from "./about/Component/About";
import ProjectPage from "./project/page";
import Contract from "./Contract/page";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div>
      <Banner />
      <Skills></Skills>
      <Experience/>
      <Projects/>
      <Contract/>
    </div>
  );
}
