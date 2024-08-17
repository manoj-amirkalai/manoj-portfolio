
import { services } from "./../../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from '../../assets/shape-2.png'
import shapeOne from "../../assets/shape-1.png";
//swiper react components
import { Swiper,SwiperSlide } from "swiper/react";
//swiper  styles
import 'swiper/css'
import 'swiper/css/pagination'
import "./Services.css";
//swiper required modules
import { Pagination } from "swiper/modules";
const Services = () => {

  
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">Endeavors</h2>
      <p className="section__subtitle skillsubtitle">
        My<span>Services</span>
      </p>
      <Swiper 
        // slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '540': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1200': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper services__container container">
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide key={index} className="services__item card card-one">
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="#pricing" className="link">
                See Pricing 1
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>    <img src={shapeTwo} alt="dot image" className="shape c__shape" />
    
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
  <img src={shapeOne} alt="" className="shape" />

</div>
<div className="section__bg-wrapper">
        <span className="bg__title">
          Services
        </span>
      </div>
    </section>
  );
};

export default Services;
