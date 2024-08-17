import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Card = ({ title, subtitle, date, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="resume__item">
      <div className="resume__header" >
        <h3 className="resume__subtitle"> {title} </h3>
        <span 
      onMouseEnter={() => setShowInfo(!showInfo)}
      onMouseLeave={() => setShowInfo(!showInfo)}
      className="resume__icon"><FaEye /></span>
      </div>
      <div className={`${showInfo?"show-content":""} resume__content`}>
        <div className="resume__data-title">
          <h3 className="resume__title">{subtitle}</h3>
          <span className="resume__date text-cs">{date}</span>{" "}
        </div>
        <p className="resume__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
