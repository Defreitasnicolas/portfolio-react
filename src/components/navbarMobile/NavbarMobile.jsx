import { useState } from "react";
import { Link } from "react-router-dom";
import "../navbarMobile/NavbarMobile.css";

function NavbarMobile() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="burger_container" style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className="navlink">
          <Link className="link" to="/">Accueil</Link>
          <Link className="link" to="/Apropos">A propos de moi</Link>
          <Link className="link" to="/Projets">Mes projets</Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;