import "./Skills.css";
import { skills } from "./../../Data";

import shapeOne from "../../assets/shape-1.png";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs skilltitle">Professional Skills</h2>
      <p className="section__subtitle skillsubtitle">
        My<span>Talent</span>
      </p>

      {/* <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div key={index} className="skills__item">
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage}
                  <span>%</span>
                </span>
              </div>
              <p className="skills__description">{description}</p>
              <div className="skills__bar">
                <span
                  style={{ width: `${percentage}%` }}
                  className="skills__percentage"
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="skills__container container grid">
        <div className="skills__item">
          <FaHtml5 className="skillicon html" />
          <FaCss3Alt className="skillicon css" />
          <IoLogoJavascript  className="skillicon js"/>
          <FaReact  className="skillicon react"/>
          <SiExpress  className="skillicon express"/>
          <FaNodeJs  className="skillicon node"/>
          <SiMongodb  className="skillicon mongodb"/>
          <RiNextjsFill  className="skillicon next"/>
        </div>
      </div>
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">Skills</span>
      </div>
    </section>
  );
};

export default Skills;
