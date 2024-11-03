import { FaRegEnvelope, FaRegUser, FaRegMap, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import shapeOne from "../../assets/shape-1.png";
import "./Contact.css";
import { useRef, useState } from "react";
import { message } from "antd";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const forms = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || form.name.length === 0) {
      return message.error("Please enter Name to send message");
    }
    if (!form.email || form.email.length === 0) {
      return message.error("Please enter E-mail Id to send message");
    }
    if (!validateEmail(form.email)) {
      return message.error("Please enter valid Email Id to send message");
    }
    if (!form.subject || form.subject.length === 0) {
      return message.error("Please enter Subject to send message");
    }
    if (!form.message || form.message.length === 0) {
      return message.error("Please enter Message to send message");
    }

    emailjs.sendForm("service_tr19mud", "template_lu7qrs7", forms.current, {
        publicKey: "Tz_ZoHiqLnaIK94N4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          message.success("Message sent, Kindly Please check you Mail now.");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle">
        Let 's<span>Talk About Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />{" "}
            </span>
            <div className="contact__card-title">Address</div>
            <div className="contact__card-data">
              Chennai, Tamil nadu, India.
            </div>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />{" "}
            </span>
            <div className="contact__card-title">Freelance</div>
            <div className="contact__card-data">Available Right Now</div>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />{" "}
            </span>
            <div className="contact__card-title">E-Mail</div>
            <div className="contact__card-data">manojamir2911@gmail.com</div>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaWhatsapp />{" "}
            </span>
            <div className="contact__card-title">Phone</div>
            <div className="contact__card-data">+91-9597388699</div>
          </div>
        </div>

        <form className="contact__form" ref={forms} onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your full Name <b>*</b>{" "}
              </label>{" "}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact__form-input"
              />{" "}
            </div>{" "}
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Email Address <b>*</b>{" "}
              </label>{" "}
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="text"
                className="contact__form-input"
              />{" "}
            </div>{" "}
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject <b>*</b>{" "}
            </label>{" "}
            <input
              name="subject"
              value={form.subject}
              type="text"
              onChange={handleChange}
              className="contact__form-input"
            />{" "}
          </div>{" "}
          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Your Messaage <b>*</b>{" "}
            </label>{" "}
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact__form-input"
            ></textarea>
          </div>
          <div className="contact__submit">
            <button type="submit" className="btn text-cs">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
