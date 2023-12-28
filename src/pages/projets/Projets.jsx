/* eslint-disable react/prop-types */
import "../projets/Projets.css";
import CarteProjet from "../../components/carteProjet/CarteProjet";
function Projets() {
  const projectsData = [
    {
      id: 1,
      projectName: "xmass",
      imageSrc: "src/assets/xmass_mobile.png",
      imageAlt: "Ceci est l image du site xmass.click",
      logoTechno: ["src/assets/reactjs.svg", "src/assets/sass-original.svg", "src/assets/javascript.svg"],
      technoAlt: ["Ceci est le logo react", "Ceci est le logo sass", "Ceci est le logo js"],
      description:
        "Xmass.click est un projet hackathon realisé sur 36 heures a 5 personnes dans le cadre de notre formation",
    },
   
    {
      id: 2,
      projectName: "Cap Team",
      imageSrc: "src/assets/CapTeam_mobile.png",
      imageAlt: "Ceci est l image du site CapTeam",
      logoTechno: ["src/assets/reactjs.svg", "src/assets/css.svg", "src/assets/javascript.svg"],
      technoAlt: ["Ceci est le logo react", "Ceci est le logo sass", "Ceci est le logo js"],
      description:
        "Xmass.click est un projet hackathon realisé sur 36 heures a 5 personnes dans le cadre de notre formation",
    },
    {
      id: 3,
      projectName: "wildy gamy",
      imageSrc: "src/assets/WildyGamy.png",
      imageAlt: "Ceci est l image du site wildy Gamy",
      logoTechno: ["src/assets/reactjs.svg", "src/assets/sass-original.svg", "src/assets/javascript.svg"],
      technoAlt: ["Ceci est le logo react", "Ceci est le logo sass", "Ceci est le logo js"],
      description:
        "En cours de developpement, wildy gamy un site de jeux en ligne concue a quatres pour le projet numero trois de notre formation",
    },
  ];
  return (
    <div className="projects_container">
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
  );
}

export default Projets;
