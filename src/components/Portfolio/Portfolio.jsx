import List from "./List";
import Item from "./Item";
import { projects } from "../../Data";
import shapeOne from "../../assets/shape-1.png";
import "./Portfolio.css";
import {  useState } from "react";
const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [navlist, setNavlist] = useState(allNavList);
  const filterItems = (category) => {
    if(category==="all"){
      return setProjectItems(projects)
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setProjectItems(newProjectItems);
  };
  const Items=()=>{
    return <Item projectItems={projectItems}/>
  }

  return (
    <section className="portfolio section" id="works">
      {" "}
      <h2 className="section__title text-cs">Projects</h2>
      <p className="section__subtitle">
        {/* My<span>works</span> */}
      </p>
      <List filterItems={filterItems} navlist={navlist} />
     <Items/>
      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />

      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">
          Portfolio
        </span>
      </div>
    </section>
  );
};

export default Portfolio;
