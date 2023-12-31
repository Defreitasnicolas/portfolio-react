import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";

function App() {
  return (
    <div className="background">
      <Navbar />
      <NavbarMobile />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
