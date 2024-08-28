import "./SingleLineInput.css";
const SingleLineInput = ({ label,singleline,require, errormsg, setSingleline,showError }) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <input
      value={singleline}
        onChange={(e) => {
          setSingleline(e.target.value);
        }}
        className="single_line_input"
        type="text"
      /> 
      {showError && <> {!singleline || singleline.length<1? 
        <span className="error_msg">{require && errormsg}</span>:""}</>}
        
    </div>
  );
};

export default SingleLineInput;
