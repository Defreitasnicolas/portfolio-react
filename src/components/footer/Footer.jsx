import { useLocation } from "react-router-dom";
import "../footer/Footer.css";
import github from "/github.png";
import linkedin from "/linkedin.png";

function Footer() {
  const githubUrl = "https://github.com/Defreitasnicolas";
  const linkedinUrl =
    "https://www.linkedin.com/in/nicolas-de-freitas-a34a78291";

  const location = useLocation();
  const currentPageClass = determineCurrentPageClass(location.pathname);

  return (
    <div className={`footer ${currentPageClass}`}>
      <div className="contact">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github_link" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin_link" />
        </a>
        <a href="mailto:defreitasnicolas605@gmail.com">
          <p>defreitasnicolas605@gmail.com</p>
        </a>
      </div>
    </div>
  );
}

function determineCurrentPageClass(pathname) {
  if (pathname === "/Projets") {
    return "footer-projets";
  }
  return "footer";
}

export default Footer;
