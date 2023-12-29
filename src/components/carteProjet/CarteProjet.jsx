/* eslint-disable react/prop-types */
import "../carteProjet/CarteProjet.css";
import { useState } from "react";

function CarteProjet(props) {
  const [isCardClicked, setIsCardClicked] = useState(false);
  // const [oneCardIsCliked, setOneCardIsCliked] = useState(true);

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
              <img
                key={id}
                src={logo}
                alt={props.technoAlt[id]}
                width={40}
              />
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

export default CarteProjet;
