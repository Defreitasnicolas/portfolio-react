import "../home/Home.css";
import picture from "../../assets/picture.png";

function Home() {
  return (
    <div className="container_home">
      <div className="bienvenue">
        <h2>Bonjour et bienvenue !</h2>
        <p>NICOLAS DE FREITAS</p>
        <p>Développeur WEB/WEBMOBILE</p>
      </div>
      <div className="picture-container">
        <img className="picture" src={picture} alt="foto de moi" />
      </div>
    </div>
  );
}

export default Home;
