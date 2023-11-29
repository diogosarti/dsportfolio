import "./hero.css";
import { FaLinkedin, FaGithub, FaPaperclip } from "react-icons/fa";
import { SiSpring, SiPhp } from "react-icons/si";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import Link from "next/link";

export default function HeroSection({id, className }) {
  return (
    <section id={id} className="heroSection">
      <div className="container">
        <h2>Olá! 👋 meu nome é</h2>
        <h1>
          Diogo Sarti, <br /> FullStack Developer
        </h1>
        <p>
          Minha jornada na programação começou em 2020, desenvolvendo um
          aplicativo em React Native no ensino médio.
        </p>
      </div>

      <div className="heroInfo">
        <div className="linguagens">
          <FaJava className="linguagem" />
          <SiSpring className="linguagem" />
          <FaNodeJs className="linguagem" />
          <FaReact className="linguagem" />
          <SiPhp className="linguagem" />
          <BiLogoPostgresql className="linguagem" />
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
