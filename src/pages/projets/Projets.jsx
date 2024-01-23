import "../projets/Projets.css";
import CarteProjet from "../../components/carteProjet/CarteProjet";

function Projets() {
  const projectsData = [
    {
      id: 1,
      projectName: "Xmass",
      imageSrc: "/xmass_mobile.png",
      imageAlt: "Ceci est l image du site xmass.click",
      logoTechno: [
        "/reactjs.svg",
        "/sass-original.svg",
        "/javascript.svg",
        "/html.svg",
        "/git.svg",
        "/github.svg",
      ],
      technoAlt: [
        "Ceci est le logo react",
        "Ceci est le logo sass",
        "Ceci est le logo js",
        "Ceci est le logo html",
        "Ceci est le logo git",
        "Ceci est le logo github",
      ],
      description:
        "Xmass.click est un projet hackathon réalisé sur 36 heures à 5 personnes, dans le cadre de notre formation avec pour seul contrainte de rester dans le thème des fêtes de fin d'année, xmassClick est un clicker addictif et disponible sur : www.Xmass.click",
    },

    {
      id: 2,
      projectName: "Cap Team",
      imageSrc: "/CapTeam_mobile.png",
      imageAlt: "Ceci est l image du site CapTeam",
      logoTechno: [
        "/reactjs.svg",
        "/css.svg",
        "/javascript.svg",
        "/nodejs.svg",
        "/mysql.svg",
        "/html.svg",
        "/git.svg",
        "/github.svg",
      ],
      technoAlt: [
        "Ceci est le logo react",
        "Ceci est le logo sass",
        "Ceci est le logo js",
        "Ceci est le logo nodejs",
        "Ceci est le logo mysql",
        "Ceci est le logo html",
        "Ceci est le logo git",
        "Ceci est le logo github",
      ],
      description:
        "Projet numéro deux au sein de notre école (Wild Code School), réalisé à quatre wilders, c'est une encyclopédie de super heros !",
    },
    {
      id: 3,
      projectName: "Wildy Gamy",
      imageSrc: "/WildyGamy.png",
      imageAlt: "Ceci est l image du site wildy Gamy",
      logoTechno: [
        "/reactjs.svg",
        "/sass-original.svg",
        "/javascript.svg",
        "/nodejs.svg",
        "/mysql.svg",
        "/git.svg",
        "/github.svg",
      ],
      technoAlt: [
        "Ceci est le logo react",
        "Ceci est le logo sass",
        "Ceci est le logo js",
        "Ceci est le logo nodejs",
        "Ceci est le logo mysql",
        "Ceci est le logo git",
        "Ceci est le logo github",
      ],
      description:
        "En cours de developpement, wildy gamy est un site de jeux en ligne conçue à quatre pour le projet numéro trois de notre formation",
    },
  ];
  return (
    <div className="projects_container">
      <div className="projet">
        {projectsData.map((project) => (
          <CarteProjet
            key={project.id}
            projectName={project.projectName}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            logoTechno={project.logoTechno}
            technoAlt={project.technoAlt}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projets;
