
import "./TextArea.css";
const TextArea = ({
  label,
  errormsg,
  require,
  setText,text,showError
}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <textarea
      value={text}
        required={require}
        onChange={(e)=>setText(e.target.value)}
        className="addfield_textarea_textarea"
      ></textarea>
      {showError && <>
      {!text || text.length<1? 
      <span className="error_msg">{require && errormsg}</span>:""}</>}
      
    </div>
  );
};

export default TextArea;
