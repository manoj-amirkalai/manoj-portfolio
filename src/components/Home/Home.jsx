import "./Home.css";
//import profile from "../../assets/profile.webp";
import profile from "../../assets/profile11.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CV from "../../assets/Manoj Amirthalingam _ Front-End Lead & MERN Stack Developer.pdf";
import CountUp from "react-countup";
import TextPressure from "../React-Bits/Name_Text";
import CurvedLoop from "../React-Bits/Curve_Text";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <h1 className="home__title text-cs">
            <span>
              <TextPressure
                text="Manoj    Amirthalingam"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="rgb(68, 173, 231)"
                strokeColor="#ff0000"
                minFontSize={5}
              />
            </span>
          </h1>
          <div className="home__job">
            <b>
              <p className="animated-text">
                I &apos;m a <span></span>
              </p>
            </b>
          </div>
          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profile} className="home__profile" alt="Home profile" />
              {/* <CurvedLoop
            marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
            speed={3}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="custom-text-style"
          /> */}
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                <CountUp start={0} end={new Date().getFullYear() - 2021 - (new Date().getMonth() < 10 ? 1 : 0)} duration={4} delay={3} />.
                <CountUp start={0} end={new Date().getMonth() >= 10 ? new Date().getMonth() - 10 : new Date().getMonth() + 2} duration={4} delay={3} />
               &nbsp; <b>+</b>&nbsp;
              </span>
              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>{" "}
            </p>
            <p className="home__data home__data-two">
              <span className="text-lg">
                <CountUp start={0} end={38} duration={4} delay={3} /> &nbsp;
                <b>+</b>
              </span>
              <span className="text-sm text-cs">
                completed <span>projects</span>
              </span>
            </p>
            {/* <img src={shapeOne} className="shape shape__1" alt="" /> */}
            <img src={shapeTwo} className="shape shape__2" alt="" />
            <img src={shapeTwo} className="shape shape__3" alt="" />
          </div>
          <p className="home__text">
            I’m a dedicated Software Engineer passionate about building dynamic, interactive digital experiences.
            I am well-versed in <b className="boldSkills">HTML, CSS, JavaScript, Typescript</b> and other 
            libraries and frameworks like <b className="boldSkills">React.js, Lit and Next.js</b> and Additionally, have
            experience in<b className="boldSkills"> Next.js</b> and <b className="boldSkills"> MERN Stack</b>.
          </p>

          <div className="home__socials">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220/"
              className="home__social-link"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/qr/CWYH77IQQSYQK1"
              target="_blank"
              className="home__social-link"
            >
              {" "}
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/manoj-amirkalai"
              target="_blank"
              className="home__social-link"
            >
              {" "}
              <FaGithub />
            </a>{" "}
            <a href="#contact" className="home__social-link">
              {" "}
              <IoIosMail />
            </a>
          </div>

          <div className="home__btns">
            <a download="Manoj Amirthalingam Resume" href={CV} className="btn">
              Download CV
            </a>

            <a href="#skills" className="hero__link">
              My Skills
            </a>
          </div>
        </div>
      </div>
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
