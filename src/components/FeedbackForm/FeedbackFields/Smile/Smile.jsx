import {
  BsEmojiAngryFill,
  BsEmojiExpressionlessFill,
  BsEmojiFrownFill,
  BsEmojiGrinFill,
  BsEmojiSmileFill,
} from "react-icons/bs";

import "./Smile.css";

const Smile = ({ label, errormsg, smile, require, setSmile, showError }) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="star_icon_container">
        <BsEmojiAngryFill
          onClick={() => {
            setSmile(1);
          }}
          className={smile >= 1 ? "emoji_icon smile1" : "emoji_icon"}
        />
        <BsEmojiFrownFill
          onClick={() => {
            setSmile(2);
          }}
          className={smile >= 2 ? "emoji_icon smile2" : "emoji_icon"}
        />
        <BsEmojiExpressionlessFill
          onClick={() => {
            setSmile(3);
          }}
          className={smile >= 3 ? "emoji_icon smile3" : "emoji_icon"}
        />
        <BsEmojiSmileFill
          onClick={() => {
            setSmile(4);
          }}
          className={smile >= 4 ? "emoji_icon smile4" : "emoji_icon"}
        />
        <BsEmojiGrinFill
          onClick={() => {
            setSmile(5);
          }}
          className={smile >= 5 ? "emoji_icon smile5" : "emoji_icon"}
        />
      </div>

      {showError && (
        <>
          {smile < 1 ? (
            <span className="error_msg">{require && errormsg}</span>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Smile;
