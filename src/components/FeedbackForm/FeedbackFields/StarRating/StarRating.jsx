import "./StarRating.css";
import { BiSolidStar } from "react-icons/bi";
const StarRating = ({ label,star,setStar,require, errormsg,showError }) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="star_icon_container">
        <BiSolidStar
          onClick={() => {
            setStar(1);
          }}
          className="star_icon"
        />
        <BiSolidStar
          onClick={() => {
            setStar(2);
          }}
          className="star_icon"
        />
        <BiSolidStar
          onClick={() => {
            setStar(3);
          }}
          className="star_icon"
        />
        <BiSolidStar
          onClick={() => {
            setStar(4);
          }}
          className="star_icon"
        />
        <BiSolidStar
          onClick={() => {
            setStar(5);
          }}
          className="star_icon"
        />
      </div>
      {showError && <>
      {star<1? 
      <span className="error_msg">{require && errormsg}</span>:""}</>}
      
    </div>
  );
};

export default StarRating;
