import "../projets/Projets.css";
import CarteProjet from "../../components/carteProjet/CarteProjet";

function Projets() {
  const projectsData = [
    {
      id: 1,
      projectName: "Xmass",
      imageSrc: "src/assets/xmass_mobile.png",
      imageAlt: "Ceci est l image du site xmass.click",
      logoTechno: [
        "src/assets/reactjs.svg",
        "src/assets/sass-original.svg",
        "src/assets/javascript.svg",
        "src/assets/html.svg",
        "src/assets/git.svg",
        "src/assets/github.svg",
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
        "Xmass.click est un projet hackathon realisé sur 36 heures a 5 personnes. Realisé dans le cadre de notre formation avec pour seul contrainte de resté dans le theme des fetes de fin d année, xmassClick est un clicker adictif et dispponible sur : www.Xmass.click",
    },

    {
      id: 2,
      projectName: "Cap Team",
      imageSrc: "src/assets/CapTeam_mobile.png",
      imageAlt: "Ceci est l image du site CapTeam",
      logoTechno: [
        "src/assets/reactjs.svg",
        "src/assets/css.svg",
        "src/assets/javascript.svg",
        "src/assets/nodejs.svg",
        "src/assets/mysql.svg",
        "src/assets/html.svg",
        "src/assets/git.svg",
        "src/assets/github.svg",
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
        "Projet numero deux au sein de notre ecole (wild code school), realiser a quatres wilder est une anciclopedie de super heros !",
    },
    {
      id: 3,
      projectName: "Wildy Gamy",
      imageSrc: "src/assets/WildyGamy.png",
      imageAlt: "Ceci est l image du site wildy Gamy",
      logoTechno: [
        "src/assets/reactjs.svg",
        "src/assets/sass-original.svg",
        "src/assets/javascript.svg",
        "src/assets/nodejs.svg",
        "src/assets/mysql.svg",
        "src/assets/git.svg",
        "src/assets/github.svg",
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
        "En cours de developpement, wildy gamy un site de jeux en ligne concue a quatres pour le projet numero trois de notre formation",
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
