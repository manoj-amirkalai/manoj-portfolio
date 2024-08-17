import shape2 from "./../../assets/shape-2.png";
import testimonialIcon from "./../../assets/testimonials-icon.svg";
import { testimonials } from "../../Data";
import shapeOne from "../../assets/shape-1.png";
//swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper  styles
import "swiper/css";
import "swiper/css/pagination";
import "./Testmonials.css";
//swiper required modules
import { Pagination } from "swiper/modules";
const Testmonials = () => {
  return (
    <section className="testimonial section" id="testimonials">
      <h2 className="section__title text-cs">Feedback</h2>
      <p className="section__subtitle">
        My<span>Associate say... </span>
      </p>
      <Swiper
        // slidesPerView={3}
        // spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper testimonial__container container"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide key={index} className="services__item card card-one cardone">
              <div className="testimonial__header">
                <div className="testimonial__icon">
                  <img src={testimonialIcon} alt="" />
                </div>
                <img src={img} className="testimonial__img" alt="" />
              </div>
              <p className="testimonial__description">{description}</p>
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__author">{author}</p>
              <img src={shape2} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="section__deco deco__right">
  <img src={shapeOne} alt="" className="shape" />

</div>
<div className="section__bg-wrapper">
        <span className="bg__title">
          Reviews
        </span>
      </div>
    </section>
  );
};

export default Testmonials;
