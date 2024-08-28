
import "./Category.css";

const Category = ({
  label,
  errormsg,require,
  options,setCategory,showError
}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="category_option">
      {options.map((data,index)=>{
        return <span onClick={()=>{
          setCategory(data);
        }} key={index}>{data}</span>
      })}
      </div> 
      {showError && <><span className="error_msg">{require && errormsg}</span></>}
    
    </div>
  );
};

export default Category;
