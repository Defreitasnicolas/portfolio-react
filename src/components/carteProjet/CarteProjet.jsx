import "../carteProjet/CarteProjet.css";
import { useState } from "react";
import  PropTypes  from "prop-types";

function CarteProjet(props) {
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };
  return (
    <>
      {!isCardClicked ? (
        <div className="card_container" onClick={handleCardClick}>
          <h2 className="title">{props.projectName}</h2>
          <div className="card">
            <img
              className="image_project"
              src={props.imageSrc}
              alt={props.imageAlt}
            />
          </div>
          <div className="logo">
            {props.logoTechno.map((logo, id) => (
              <img key={id} src={logo} alt={props.technoAlt} width={40} />
            ))}
          </div>
        </div>
      ) : (
        <div className="description" onClick={handleCardClick}>
          {isCardClicked && <p>{props.description}</p>}
        </div>
      )}
    </>
  );
}

CarteProjet.propTypes = {
  projectName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  logoTechno: PropTypes.arrayOf(PropTypes.string).isRequired,
  technoAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CarteProjet;
