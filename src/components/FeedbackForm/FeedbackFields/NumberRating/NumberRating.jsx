import "./NumberRating.css";
const NumberRating = ({ label,numberRating,require, errormsg, setNumberRating,showError }) => {
  return (
    <div className="addfield_textarea">
      <p>{label} </p>
      <div className="number_rating">
        <span
          onClick={() => {
            setNumberRating(1);
          }}
          className={numberRating>=1?"number selectedrating":"number"}
        >
          1
        </span>
        <span
          onClick={() => {
            setNumberRating(2);
          }}
          className={numberRating>=2?"number selectedrating":"number"}
        >
          2
        </span>
        <span
          onClick={() => {
            setNumberRating(3);
          }}
          className={numberRating>=3?"number selectedrating":"number"}
        >
          3
        </span>
        <span
          onClick={() => {
            setNumberRating(4);
          }}
          className={numberRating>=4?"number selectedrating":"number"}
        >
          4
        </span>
        <span
          onClick={() => {
            setNumberRating(5);
          }}
          className={numberRating>=5?"number selectedrating":"number"}
        >
          5
        </span>
        <span
          onClick={() => {
            setNumberRating(6);
          }}
          className={numberRating>=6?"number selectedrating":"number"}
        >
          6
        </span>
        <span
          onClick={() => {
            setNumberRating(7);
          }}
          className={numberRating>=7?"number selectedrating":"number"}
        >
          7
        </span>
        <span
          onClick={() => {
            setNumberRating(8);
          }}
          className={numberRating>=8?"number selectedrating":"number"}
        >
          8
        </span>
        <span
          onClick={() => {
            setNumberRating(9);
          }}
          className={numberRating>=9?"number selectedrating":"number"}
        >
          9
        </span>
        <span
          onClick={() => {
            setNumberRating(10);
          }}
          className={numberRating>=10?"number selectedrating":"number"}
        >
          10
        </span>
      </div>
      {showError && <>
      {numberRating<1? 
      <span className="error_msg">{require && errormsg}</span>:""}</>}
      
    </div>
  );
};

export default NumberRating;
