import { FaArrowRight } from "react-icons/fa";
import "./Blog.css";
import blog1 from "./../../assets/blog1.jpg";

import shapeOne from "../../assets/shape-1.png";
import blog2 from "./../../assets/blog2.jpg";
import blog3 from "./../../assets/blog3.jpg";
const Blog = () => {
  return (
    <section className="blog section " id="blog">
      <h2 className="section__title text-cs">Blog</h2>
      <p className="section__subtitle">
        My<span> Articles and Advice</span>
      </p>
      <div className="blog__container container grid">
        <div className="blog__item card card-two blog__itemone">
          <span className="blog__date text-cs">OCTOBER 31, 2022</span>{" "}
          <h3 className="blog__title">The Main Thing For The Designer</h3>
          <p className="blog__description">
            Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
            Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
            ornare eget.
          </p>
          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={blog1} alt="" className="blog__img" />
        </div>{" "}
        <div className="blog__item card card-two blog__itemtwo">
          <span className="blog__date text-cs">OCTOBER 31, 2022</span>{" "}
          <h3 className="blog__title">The Main Thing For The Designer</h3>
          <p className="blog__description">
            Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
            Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
            ornare eget.
          </p>
          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={blog2} alt="" className="blog__img" />
        </div>{" "}
        <div className="blog__item card card-two blog__itemthree">
          <span className="blog__date text-cs">OCTOBER 31, 2022</span>{" "}
          <h3 className="blog__title">The Main Thing For The Designer</h3>
          <p className="blog__description">
            Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
            Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
            ornare eget.
          </p>
          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={blog3} alt="" className="blog__img" />
        </div>
      </div>
      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">
          Blog
        </span>
      </div>
    </section>
  );
};

export default Blog;
