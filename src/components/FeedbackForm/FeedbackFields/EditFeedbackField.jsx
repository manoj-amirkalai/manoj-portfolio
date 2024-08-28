"use client";
import { useEffect, useState } from "react";
import "./style.css";
import TextArea from "./TextArea/TextArea";
import NumberRating from "./NumberRating/NumberRating";
import StarRating from "./StarRating/StarRating";
import Smile from "./Smile/Smile";
import SingleLineInput from "./SingleLineInput/SingleLineInput";
import RadioButton from "./RadioButton/RadioButton";
import Category from "./Category/Category";
import axios from "axios";
import { message } from "antd";
import { Button } from "@mui/material";

const CreateForm = ({ setOpen }) => {
  const [showError, setShowError] = useState(false);
  const [text, setText] = useState("");
  const [numberRating, setNumberRating] = useState(0);
  const [smile, setSmile] = useState(0);
  const [star, setStar] = useState(0);
  const [singleline, setSingleline] = useState("");
  const [radio, setRadio] = useState("");
  const [category, setCategory] = useState("");
  const [feedbackforminfo, setFeedbackforminfo] = useState([]);
  const [feedbackforminfoId, setFeedbackforminfoId] = useState();
  const [formTitle, setFormTitle] = useState("");
  const [feedbackformlist, setFeedbackformlist] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-feedback-server.onrender.com/api//feedbackform/66ce94aca713b2defc720430"
      );
      if (response.status === 200) {
        setFeedbackforminfo(response.data.feedbackform);
      }
    } catch (e) {
      message.error(e.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setFormTitle(feedbackforminfo.feedbacktitle);
    setFeedbackformlist(feedbackforminfo.feedbackform);
    setFeedbackforminfoId(feedbackforminfo._id);
  }, [feedbackforminfo]);

  const handleSubmit = async () => {
    if (feedbackformlist[0].require) {
      if (!text || text.length < 0) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }
    if (feedbackformlist[1].require) {
      if (numberRating < 1) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }
    if (feedbackformlist[2].require) {
      if (star < 1) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }
    if (feedbackformlist[3].require) {
      if (smile < 1) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }
    if (feedbackformlist[4].require) {
      if (!singleline || singleline.length < 0) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }
    if (feedbackformlist[5].require) {
      if (!radio) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }
    if (feedbackformlist[6].require) {
      if (!category) {
        setShowError(true);
        return message.error("please fill all required fields");
      }
    }

    const data = {
      formid: feedbackforminfoId,
      textarea: text,
      numberrating: numberRating,
      smile: smile,
      star: star,
      singleline: singleline,
      radio: radio,
      category: category,
    };

    try {
      const response = await axios.post(
        "https://portfolio-feedback-server.onrender.com/api/createfeedback",
        data
      );

      if (response.status === 201) {
        message.success("Feedback Submitted,Thank You!!!");
        setOpen(false);
      } else {
        message.error("Error in submitting feedback");
      }
    } catch (e) {
      message.error(e.message);
    }
  };
  return (
    <div>
      <div className="create_form">
        <div className="create_form_container">
          <div className="create_form_container_head">
            {" "}
            <p>{formTitle}</p>
          </div>
          <div>
            {!feedbackformlist ? (
              <h3 className="create_form_lable">Add Fields</h3>
            ) : (
              <div>
                {feedbackformlist.map((item) => {
                  return (
                    <div key={item._id}>
                      {item.type === "textarea" && (
                        <TextArea
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          setText={setText}
                          text={text}
                          showError={showError}
                        />
                      )}
                      {item.type === "numberrating" && (
                        <NumberRating
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          setNumberRating={setNumberRating}
                          numberRating={numberRating}
                          showError={showError}
                        />
                      )}
                      {item.type === "starrating" && (
                        <StarRating
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          setStar={setStar}
                          star={star}
                          showError={showError}
                        />
                      )}{" "}
                      {item.type === "smile" && (
                        <Smile
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          setSmile={setSmile}
                          smile={smile}
                          showError={showError}
                        />
                      )}{" "}
                      {item.type === "singlelineinput" && (
                        <SingleLineInput
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          setSingleline={setSingleline}
                          singleline={singleline}
                          showError={showError}
                        />
                      )}{" "}
                      {item.type === "radiobutton" && (
                        <RadioButton
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          options={item.options}
                          setRadio={setRadio}
                          radio={radio}
                          showError={showError}
                        />
                      )}{" "}
                      {item.type === "category" && (
                        <Category
                          id={item._id}
                          label={item.label}
                          errormsg={item.errormsg}
                          options={item.options}
                          require={item.require}
                          setCategory={setCategory}
                          category={category}
                          showError={showError}
                        />
                      )}
                    </div>
                  );
                })}
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{marginLeft:"40%",marginBottom:"5%"}}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;