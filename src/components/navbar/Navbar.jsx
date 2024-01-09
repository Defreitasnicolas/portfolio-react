import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import Cv from "../cv/Cv.jsx";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <Link className="link" to="/">
          <h2>Accueil</h2>
        </Link>
        <Link className="link" to="/apropos">
          <h2>A propos de moi</h2>
        </Link>
        <Link className="link" to="/projets">
          <h2>Mes projets</h2>
        </Link>
        <Cv />
      </div>
    </div>
  );
}

export default Navbar;
