import "../carteProjet/CarteProjet.css";
import CapTeam from "../../assets/CapTeam_fullScreen.png";

function CarteProjet() {
  return (
    <div className="card_container">
      <div className="carte">
        <img
          className="image_project"
          src={CapTeam}
          alt="ceci est l image du projet capteam"
        />
      </div>
      <div className="description">
        <p>logo techno</p> <br />
        <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, natus?
        </p>
      </div>
    </div>
  );
}

export default CarteProjet;
