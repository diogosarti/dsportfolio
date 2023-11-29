import "./hero.css";
import { FaLinkedin, FaGithub, FaPaperclip } from "react-icons/fa";
import { SiSpring, SiPhp } from "react-icons/si";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import Link from "next/link";

export default function HeroSection({ className }) {
  return (
    <section className="heroSection">
      <div className="container">
        <h2>Olá! 👋</h2>
        <h1>
          Meu nome é Diogo Sarti <br /> FullStack Developer
        </h1>
        <p>
          Minha jornada na programação começou em 2020, desenvolvendo um
          aplicativo em React Native no ensino médio.
        </p>
      </div>

      <div className="heroInfo">
        <div className="linguagens">
          <FaJava size={50} />
          <SiSpring size={50} />
          <FaNodeJs size={50} />
          <FaReact size={50} />
          <SiPhp size={50} />
          <BiLogoPostgresql size={50} />
        </div>
        <div className="redesSociais">
          <Link href="https://github.com/diogosarti" target="_blank">
            <FaGithub size={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/diogosarti/" target="_blank">
            <FaLinkedin size={50} />
          </Link>
          <FaPaperclip size={50} />
        </div>
      </div>
    </section>
  );
}
