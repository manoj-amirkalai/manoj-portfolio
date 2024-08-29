
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiExpressionless } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import './Smile.css'

const Smile = ({label,errormsg,smile,require,setSmile,showError}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="star_icon_container">
        <BsEmojiAngry onClick={() => {
            setSmile(1);
          }} className={smile>=1?"emoji_icon smile1":"emoji_icon"} />
        <BsEmojiFrown onClick={() => {
            setSmile(2);
          }} className={smile>=2?"emoji_icon smile2":"emoji_icon"}  />
        <BsEmojiExpressionless onClick={() => {
            setSmile(3);
          }} className={smile>=3?"emoji_icon smile3":"emoji_icon"}  />
        <BsEmojiSmile onClick={() => {
            setSmile(4);
          }} className={smile>=4?"emoji_icon smile4":"emoji_icon"}  />
        <BsEmojiGrin onClick={() => {
            setSmile(5);
          }} className={smile>=5?"emoji_icon smile5":"emoji_icon"}  />
      </div>
     
      {showError && <>
      {smile<1? 
      <span className="error_msg">{require && errormsg}</span>:""}</>}
      
    </div>
  );
};

export default Smile;
