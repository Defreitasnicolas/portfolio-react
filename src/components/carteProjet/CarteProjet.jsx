/* eslint-disable react/prop-types */
import "../carteProjet/CarteProjet.css";

function CarteProjet(props) {
  return (
    <div className="card_container">
      <h2 className="title">{props.projectName}</h2>
      <div className="card">
        <img
          className="image_project"
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      </div>
      <div className="description">
        <div className="logo">
          {props.logoTechno.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={props.technoAlt[index]}
              width={40}
            />
          ))}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CarteProjet;
