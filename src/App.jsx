import Home from "./components/Home/Home";
import "./App.css";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Testmonials from "./components/Testmonials/Testmonials";
import Pricing from "./components/Pricing/Pricing";
// import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";

import { notification } from "antd";
import SplashCursor from "./components/React-Bits/Arrow_follower";
const Context = React.createContext({
  name: "Default",
});

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `For Better experience`,
      description: (
        <Context.Consumer>
          {() => "Please Checkout in Laptop or Desktop"}
        </Context.Consumer>
      ),
      placement,
    });
  };

  let deviceWidth = window.innerWidth;
  useEffect(() => {
    if (deviceWidth < 1200) {
      openNotification("topRight");
    }
    if (deviceWidth > 1200) {
      //overall title
      ScrollReveal({
        origin: "left",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".section__title", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".section__subtitle", { delay: 500 });

      // home
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__banner", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__profile", { delay: 800 });

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__title", { delay: 1000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".animated-text", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__data", { delay: 1500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__text", { delay: 1750 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__socials", { delay: 2000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__btns", { delay: 2250 });

      //services
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services2", { delay: 100 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__container", { delay: 700 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__subtitle", { delay: 950 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__title", { delay: 1200 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__description", { delay: 1450 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".link", { delay: 1050 });

      //destop service

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__container", { delay: 700 });

      //skills

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill1", { delay: 750 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill2", { delay: 1000 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill3", { delay: 1250 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill4", { delay: 1500 });
      ScrollReveal({
        origin: "left",
        opacity: 0,
        duration: 700,
        reset: true,
      }).reveal(".skill5", { delay: 1750 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill6", { delay: 2000 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill7", { delay: 2250 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill8", { delay: 2500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill9", { delay: 2750 });

      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill10", { delay: 3000 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill11", { delay: 3250 }); 
       ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill12", { delay: 3500 });

      //portfolio

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".swiper_portfolio", { delay: 750 });

      //resume
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".education", { delay: 1000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".experience", { delay: 1000 });

      //testimonials

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__container", { delay: 1000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__img", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__icon", { delay: 1500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__description", { delay: 1750 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__name", { delay: 500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__author", { delay: 500 });

      //pricing
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemtwo", { delay: 1000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__price", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__description", { delay: 1700 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__list", { delay: 2000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__btn", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemone", { delay: 2500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemthree", { delay: 2500 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__label", { delay: 3000 });

      //blog
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemtwo", { delay: 1000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__title", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__description", { delay: 1500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__img", { delay: 1750 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemone", { delay: 2250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemthree", { delay: 2250 });

      //contact
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".contact__content", { delay: 1000 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".contact__form", { delay: 1000 });
    }
    if (deviceWidth < 1200) {
      //overall title
      ScrollReveal({
        origin: "left",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".section__title", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".section__subtitle", { delay: 500 });

      // home
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__banner", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__profile", { delay: 800 });

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__title", { delay: 750 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".animated-text", { delay: 1000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__data", { delay: 1250 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__text", { delay: 1500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__socials", { delay: 1750 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__btns", { delay: 2000 });

      //services
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__container", { delay: 1000 });

      //skills

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill1", { delay: 750 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill2", { delay: 1000 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill3", { delay: 1250 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill4", { delay: 1750 });
      ScrollReveal({
        origin: "bottom",
        opacity: 0,
        duration: 700,
        reset: true,
      }).reveal(".skill5", { delay: 1500 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill6", { delay: 1750 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill7", { delay: 2250 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill8", { delay: 2000 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill9", { delay: 2250 });
     ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill10", { delay: 3000 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill11", { delay: 3250 }); 
       ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill12", { delay: 3500 });

      //portfolio
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".swiper_portfolio", { delay: 750 });

      //resume
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".education", { delay: 750 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".experience", { delay: 1000 });

      //testimonials

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__container", { delay: 1000 });

      //pricing
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemtwo", { delay: 1000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__price", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__description", { delay: 1500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__list", { delay: 500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__btn", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemone", { delay: 2000 });

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemthree", { delay: 2250 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__label", { delay: 2750 });

      //blog
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemtwo", { delay: 1000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__title", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__description", { delay: 1500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__img", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemone", { delay: 2000 });

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemthree", { delay: 2000 });

      //contact
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".contact__content", { delay: 1000 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".contact__form", { delay: 1000 });
    }
    if (deviceWidth < 400) {
      //overall title
      ScrollReveal({
        origin: "left",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".section__title", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".section__subtitle", { delay: 500 });

      // home

      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__banner", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__profile", { delay: 800 });

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__title", { delay: 1000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".animated-text", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__data", { delay: 1500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__text", { delay: 1750 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__socials", { delay: 500 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".home__btns", { delay: 500 });

      //services

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".services__container", { delay: 700 });

      //skills

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill1", { delay: 750 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill2", { delay: 1000 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill3", { delay: 1250 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill4", { delay: 1500 });
      ScrollReveal({
        origin: "right",
        opacity: 0,
        duration: 700,
        reset: true,
      }).reveal(".skill5", { delay: 1750 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill6", { delay: 2000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill7", { delay: 2250 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill8", { delay: 2500 });
      ScrollReveal({
        origin: "bottom",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".skill9", { delay: 2750 });

      //portfolio

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".swiper_portfolio", { delay: 750 });

      //resume
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".education", { delay: 750 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".experience", { delay: 1000 });

      //testimonials

      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".testimonial__container", { delay: 1000 });

      //pricing
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemtwo", { delay: 750 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__price", { delay: 1000 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__description", { delay: 1250 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__list", { delay: 1500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__btn", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemone", { delay: 500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__itemthree", { delay: 500 });
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".pricing__label", { delay: 2250 });

      //blog
      ScrollReveal({
        origin: "top",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemtwo", { delay: 1000 });
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__title", { delay: 1250 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__description", { delay: 1500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__img", { delay: 500 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemone", { delay: 500 });

      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".blog__itemthree", { delay: 500 });

      //contact
      ScrollReveal({
        origin: "left",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".contact__content", { delay: 1000 });
      ScrollReveal({
        origin: "right",
        distance: "100px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal(".contact__form", { delay: 1000 });
    }
  }, []);

  return (
    <main className="container">
      <SplashCursor />
      <motion.div className="progress-bar" style={{ scaleX }} />
      {contextHolder}
      <Header />
      <Home />
      <Skills />
      <Services />
      <Portfolio />
      <Resume />
      <Testmonials />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
