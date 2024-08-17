import "./Pricing.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import shape2 from "./../../assets/shape-2.png";

import shapeOne from "../../assets/shape-1.png";
const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section__title text-cs">Tariffs</h2>
      <p className="section__subtitle">
        My<span>Price Board</span>
      </p>
      <div className="pricing__container container grid">
        <div className="pricing__item card card-one pricing__itemone">
          <span className="pricing__subtitle text-cs">Hourley Basics</span>

          <h3 className="pricing__price">
            50 <span>$</span>
            <em>Hour</em>
          </h3>
          <p className="pricing__description">
            Offering rapid development of brand logos, front-end design, and
            multi-level pages in just 1 hour. Achieve fast, high-quality results
            for your web project with efficiency and precision.{" "}
          </p>
          <ul className="pricing__list">
            {" "}
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>{" "}
            </li>
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Front-End Development</span>{" "}
            </li>{" "}
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Landing Page</span>{" "}
            </li>
            <li className="list__item">
              <del>Brand Logo</del>{" "}
            </li>
            <li className="list__item">
              <del>Backend Development</del>{" "}
            </li>
          </ul>
          <a href="#contact" className="btn pricing__btn text-cs">
            Star Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
          <img src={shape2} className="shape c__shape" alt="" />
        </div>

        <div className="pricing__item-wrapper">
          <span className="pricing__label text-cs">Popular</span>
          <div className="pricing__item card card-one pricing__itemtwo">
            <span className="pricing__subtitle text-cs">Freelancing</span>

            <h3 className="pricing__price">
              1.2k <span>$</span>
              <em>week</em>
            </h3>
            <p className="pricing__description">
              Providing professional brand logos, sleek front-end development,
              and multi-level page designs for impactful web projects completed
              within a week. Elevate your online presence with quick,
              high-quality solutions.{" "}
            </p>
            <ul className="pricing__list">
              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Web Development</span>{" "}
              </li>
              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Front-End Development</span>{" "}
              </li>{" "}
              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Multi-level Routing Page</span>{" "}
              </li>
              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Brand Logo</span>{" "}
              </li>
              <li className="list__item">
                <del>Backend Development</del>{" "}
              </li>
            </ul>
            <a href="#contact" className="btn pricing__btn text-cs">
              Star Project
              <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
            </a>
            <img src={shape2} className="shape c__shape" alt="" />
          </div>
        </div>

        <div className="pricing__item card card-one pricing__itemthree">
          <span className="pricing__subtitle text-cs">Full time</span>

          <h3 className="pricing__price">
            5k <span>$</span>
            <em>Month</em>
          </h3>
          <p className="pricing__description">
          Expertly designing brand logos, crafting responsive front-end interfaces, and developing multi-level pages to deliver a comprehensive web solution tailored to your project’s needs. Transform your digital presence with professional and engaging designs. </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>{" "}
            </li>
       
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Front-End Development</span>{" "}
            </li>{" "}
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Multi-level Routing Page</span>{" "}
            </li>
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Logo</span>{" "}
            </li>
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Backend Development</span>{" "}
            </li>
          </ul>
          <a href="#contact" className="btn pricing__btn text-cs">
            Star Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
          <img src={shape2} className="shape c__shape" alt="" />
        </div>
      </div>
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">Pricing</span>
      </div>
    </section>
  );
};

export default Pricing;
