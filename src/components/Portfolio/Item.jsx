import { FaCode, FaLaptopCode, FaTabletScreenButton } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import shapeTwo from "./../../assets/shape-2.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { IoIosPhonePortrait } from "react-icons/io";

const Item = ({ projectItems }) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper swiper_portfolio  "
    >
      {projectItems.map((projectItems) => {
        const { id, img, category, title, description, github, web,responsive } =
          projectItems;
        return (
          <SwiperSlide
            key={id}
            className="portfolio__items card card-two portcard swiper-slide_portfolio "
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt={title} className="portfolio__img" />
            </div>
            <span className="portfolio__category text-cs">
              {category}
              <div className="webgit">
                {" "}
                <a className="webgits git" target="_blank" href={github}>
                  {" "}
                  <PiGithubLogoFill />
                </a>
                <a className="webgits web" target="_blank" href={web}>
                  {" "}
                  <FaCode />
                </a>
              </div>
            </span>
        <div className="project_title_responsive">
        <h3 className="portfolio__title">{title}</h3>
            {responsive?  <div  className="project_responsive"><span>
              <FaLaptopCode className="project_responsive1" />
            </span>
            <span>
              <FaTabletScreenButton  className="project_responsive2"/>
            </span>
            <span>
              <IoIosPhonePortrait className="project_responsive3" />
            </span></div>:   <div className="project_responsive"> <span>
              <FaLaptopCode className="project_responsive1"/>
            </span> </div>  }
        </div>
           
            <p className="portfolio__description">{description}</p>
            <img
              src={shapeTwo}
              alt=""
              className="shape c__shape portfolio_shape"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Item;
