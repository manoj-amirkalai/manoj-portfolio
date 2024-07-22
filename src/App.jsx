import Home from "./components/Home/Home";
import "./App.css";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Testmonials from "./components/Testmonials/Testmonials";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  
useEffect(()=>{
  
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
  //desktop
  ScrollReveal({
    origin: "right",
    distance: "200px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".home__banner", { delay: 500 },{mobile:false});
  
  ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".home__title", { delay: 1000 },{mobile:false});
  ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".animated-text", { delay: 1250 },{mobile:false});
  
  ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".home__data", { delay: 1500 },{mobile:false});
  ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".home__text", { delay: 1750 },{mobile:false});
  ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".home__socials", { delay: 2000 },{mobile:false});
  ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".home__btns", { delay: 2250 },{mobile:false});
 
  //services

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

  //skills

  ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".skills__container", { delay: 1000 });

  
  //portfolio

  ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".portfolio__list", { delay: 750 });
  

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
  }).reveal(".pricing__btn", { delay: 500 },);
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
  }).reveal(".blog__img", { delay: 1750 });
  ScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 700,
    reset: true,
    opacity: 0,
  }).reveal(".blog__itemone", { delay: 2000 });

  ScrollReveal({
    origin: "left",
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
  

},[])
  return (
    <main className="container">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testmonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
