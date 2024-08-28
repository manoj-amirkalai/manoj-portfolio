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
          className="number"
        >
          1
        </span>
        <span
          onClick={() => {
            setNumberRating(2);
          }}
          className="number"
        >
          2
        </span>
        <span
          onClick={() => {
            setNumberRating(3);
          }}
          className="number"
        >
          3
        </span>
        <span
          onClick={() => {
            setNumberRating(4);
          }}
          className="number"
        >
          4
        </span>
        <span
          onClick={() => {
            setNumberRating(5);
          }}
          className="number"
        >
          5
        </span>
        <span
          onClick={() => {
            setNumberRating(6);
          }}
          className="number"
        >
          6
        </span>
        <span
          onClick={() => {
            setNumberRating(7);
          }}
          className="number"
        >
          7
        </span>
        <span
          onClick={() => {
            setNumberRating(8);
          }}
          className="number"
        >
          8
        </span>
        <span
          onClick={() => {
            setNumberRating(9);
          }}
          className="number"
        >
          9
        </span>
        <span
          onClick={() => {
            setNumberRating(10);
          }}
          className="number"
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
