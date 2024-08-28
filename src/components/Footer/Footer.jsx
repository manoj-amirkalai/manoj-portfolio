import { IoIosMail } from "react-icons/io";
import "./Footer.css";
import { VscFeedback } from "react-icons/vsc";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { useState } from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const Footer = () => {
  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    // setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      // setLoading(false);
    }, 2000);
  };
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220/"
            className="footer__social-link"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/qr/CWYH77IQQSYQK1"
            target="_blank"
            className="footer__social-link"
          >
            {" "}
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/manoj-amirkalai"
            target="_blank"
            className="footer__social-link"
          >
            {" "}
            <FaGithub />
          </a>{" "}
          <a href="#contact" className="footer__social-link">
            {" "}
            <IoIosMail />
          </a>{" "}
          <a style={{cursor:"pointer"}}  onClick={showLoading} className="footer__social-link">
            {" "}
            <VscFeedback />
          </a>
        </div>
        <p className="footer__copyright text-cs">
          &copy; 2023 <span></span>.All Rights Reserved.
        </p>
        <div className="footer__copyright text-cs">
          Developed by <span>manoj_amirkalai</span>
        </div>
      </div>
      {open && (
        <FeedbackForm
          // loading={loading}
          setOpen={setOpen}
          open={open}
          showLoading={showLoading}
        />
      )}
    </footer>
  );
};
export default Footer;
