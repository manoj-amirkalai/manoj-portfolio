import { IoIosMail } from "react-icons/io";
import "./Footer.css";

import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
        <a target="_blank" href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220/" className="footer__social-link">
              {" "}
              <FaLinkedin  />
            </a>
            <a href="https://api.whatsapp.com/qr/CWYH77IQQSYQK1?autoload=1&app_absent=0" target="_blank"  className="footer__social-link">
              {" "}
              <FaWhatsapp />
            </a>
            <a href="https://github.com/manoj-amirkalai" target="_blank"  className="footer__social-link">
              {" "}
              <FaGithub />
            </a>  <a href="#contact" className="footer__social-link">
              {" "}
              <IoIosMail />
            </a>
        </div>
        <p className="footer__copyright text-cs">
            &copy; 2023 <span>Luique</span>.All Rights Reserved.
        </p>
        <p className="footer__copyright text-cs">
            Developed by <span>CrypticalCoder</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

