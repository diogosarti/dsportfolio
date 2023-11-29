import "./about.css";

export default function AboutSection({ id, className }) {
  return (
    <section id={id} className={`aboutSection ${className}`}>
      <div className="aboutContainer">
        <h1>Sobre mim</h1>
        <p>
          Olá, sou <strong>Diogo Sarti Julio</strong>, um apaixonado
          desenvolvedor Full Stack com habilidades sólidas em diversas
          tecnologias, incluindo{" "}
          <a href="http://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
          ,{" "}
          <a href="https://nodejs.org/" target="_blank">
            Node.js
          </a>
          ,{" "}
          <a
            href="https://rockcontent.com/br/blog/o-que-e-php/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHP
          </a>
          ,
          <a
            href="https://www.treinaweb.com.br/blog/o-que-e-o-spring"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spring Boot
          </a>
          ,{" "}
          <a
            href="https://aws.amazon.com/pt/what-is/java/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java
          </a>
          ,{" "}
          <a
            href="https://4linux.com.br/o-que-e-postgresql/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostgreSQL
          </a>
          ,{" "}
          <a
            href="https://blog.betrybe.com/tecnologia/next-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          <span> </span>e muito mais.
        </p>
        <p>
          Desde os meus 16 anos, mergulhei no mundo da programação, construindo
          inúmeros projetos que variam de lojas online a robustas plataformas de
          cursos, atendendo a diferentes necessidades de usuários.
        </p>
        <h1>Por que me escolher?</h1>
        <p>
          O que me diferencia é a minha abordagem dedicada e apaixonada para
          superar desafios. Independentemente da tecnologia ou linguagem de
          programação, estou sempre pronto para aceitar novos desafios e
          entregar soluções de alta qualidade.
        </p>
        <p>
          Se você busca um desenvolvedor flexível, criativo e comprometido,
          estou aqui para elevar seus projetos a um novo patamar. Vamos
          trabalhar juntos para transformar suas ideias em realidade!
        </p>
      </div>
    </section>
  );
}
