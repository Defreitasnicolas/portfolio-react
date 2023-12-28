import "../footer/Footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";


function Footer() {
  const githubUrl = "https://github.com/Defreitasnicolas";
  const linkedinUrl =
    "https://www.linkedin.com/in/nicolas-de-freitas-a34a78291";

  return (
    <div className="footer">
      <div></div>
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
        ;
      </div>
    </div>
  );
}

export default Footer;
