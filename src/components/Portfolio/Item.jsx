import { FaCode } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import shapeTwo from "./../../assets/shape-2.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper/modules";

const Item = ({ projectItems }) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper swiper_portfolio  "
    >
      {projectItems.map((projectItems) => {
        const { id, img, category, title, description, github, web } =
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
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Item;
