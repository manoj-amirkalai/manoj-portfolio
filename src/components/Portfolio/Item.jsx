import { FaCode } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import shapeTwo from "./../../assets/shape-2.png";
import { motion,AnimatePresence  } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

 const Item = ({ projectItems }) =>{
    return ( (
      <AnimatePresence >
        <motion.ul
          className="portfolio__container container grid"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projectItems.map((projectItems) => {
            const { id, img, category, title, description, github, web } =
              projectItems;
            return (
              <motion.li key={id} className="portfolio__items card card-two portcard" variants={item}>
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
              </motion.li>
            );
          })}
        </motion.ul></AnimatePresence>
      ))
}
export default Item