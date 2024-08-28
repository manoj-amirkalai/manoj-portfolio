"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./style.css";
import { Button, Switch, TextField } from "@mui/material";
import { IoChevronBack } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { message, Modal } from "antd";
import Link from "next/link";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import textarea from "./../../assets/textarea.png";
import number from "./../../assets/number.png";
import star from "./../../assets/star.png";
import smile from "./../../assets/smile.png";
import singleline from "./../../assets/singleline.png";
import radio from "./../../assets/radio.png";
import category from "./../../assets/category.png";
import TextArea from "@/components/FeedbackFields/TextArea/TextArea";
import NumberRating from "@/components/FeedbackFields/NumberRating/NumberRating";
import StarRating from "@/components/FeedbackFields/StarRating/StarRating";
import Smile from "@/components/FeedbackFields/Smile/Smile";
import SingleLineInput from "@/components/FeedbackFields/SingleLineInput/SingleLineInput";
import RadioButton from "@/components/FeedbackFields/RadioButton/RadioButton";
import Category from "@/components/FeedbackFields/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { setNewformtitle } from "../store/reducer";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const [urlSwitch, setUrlSwitch] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const [dateSwitch, setDateSwitch] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [dateFormatedvalue, setDateFormatedvalue] = useState("");
  const [timeSwitch, setTimeSwitch] = useState(false);
  const [timeValue, setTimeValue] = useState(dayjs());
  const [timeFormatedvalue, setTimeFormatedvalue] = useState("");
  const [editFieldId, setEditFieldId] = useState();
  const [editFieldLabel, setEditFieldLabel] = useState("");
  const [editFieldError, setEditFieldError] = useState("");
  const [editFieldRadioOption1, setEditFieldRadioOption1] = useState("");
  const [editFieldRadioOption2, setEditFieldRadioOption2] = useState("");
  const [editFieldRadioOption3, setEditFieldRadioOption3] = useState("");
  const [editFieldRequired, setEditFieldRequired] = useState();
  const [radioEdit, setRadioEdit] = useState(true);
  const [showfieldoption, setShowfieldoption] = useState(true);
  const dispatch = useDispatch();
  const router=useRouter()

  const formtitle = useSelector((state) => state.data.newformtitle);
  const [formTitle, setFormTitle] = useState(formtitle);
  let [fieldId, setFieldId] = useState(0);
  const [feedbackformlist, setFeedbackformlist] = useState([]);
  const opencloseaddfield = (a) => {
    setShowfieldoption(a);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update state with the selected date
  };
  const handleTimeChange = (newValue) => {
    setTimeValue(newValue); // Update the state with the new time value
  };
  useEffect(() => {
    const date = selectedDate ? selectedDate.format("YYYY-MM-DD") : "None";
    setDateFormatedvalue(date);
    console.log(dateFormatedvalue);
  }, [selectedDate]);
  useEffect(() => {
    const time = timeValue ? timeValue.format("HH:mm") : "None";
    setTimeFormatedvalue(time);
    console.log(timeFormatedvalue);
  }, [timeValue]);
  const uploadfeedbackformData = async () => {
    const data = {
      urlSwitch: urlSwitch,
      urlValue: urlValue,
      dateSwitch: dateSwitch,
      timeSwitch: timeSwitch,
      dateFormatedvalue: dateFormatedvalue,
      timeFormatedvalue: timeFormatedvalue,
      submitted: 1,
      viewed: 1,
      feedbacktitle: formTitle,
      feedbackform: feedbackformlist,
    };
    console.log(data);
    if(feedbackformlist.length<1){
      return message.info("Minimum of 1 field need to publish.")
    } if(feedbackformlist.length>7){
      return message.info("Maximum 7 field only can select,remove extras to publish.")
    }
    try {
      const res = await fetch(
        `https://portfolio-feedback-server.onrender.com/api/feedbackform`,

        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      message.success("Feed Back Form created");
      router.push('/')
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (editFieldId) {
      const field = feedbackformlist.find((field) => field.id === editFieldId);
      if (field.type === "radiobutton" || field.type === "category") {
        setEditFieldRadioOption1(field.options[0]);
        setEditFieldRadioOption2(field.options[1]);
        setEditFieldRadioOption3(field.options[2]);
      }
      setEditFieldLabel(field.label);
      setEditFieldError(field.errormsg);

      setEditFieldRequired(field.require);
    }
  }, [editFieldId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const removeField = (id) => {
    const data = feedbackformlist.filter((a) => {
      return a.id !== id;
    });

    setFeedbackformlist(data);
  };
  useEffect(() => {
    console.log(editFieldRequired);
  }, [editFieldRequired, editFieldId]);
  const updateformList = () => {
    const data = feedbackformlist.map((field) => {
      if (field.type === "radiobutton" || field.type === "category") {
        if (field.id === editFieldId) {
          return {
            ...field,
            id: field.id,
            typt: field.type,
            label: editFieldLabel,
            errormsg: editFieldError,
            require: editFieldRequired,
            options: [
              editFieldRadioOption1,
              editFieldRadioOption2,
              editFieldRadioOption3,
            ],
          };
        }
        return field;
      } else if (field.id === editFieldId) {
        return {
          ...field,
          id: field.id,
          typt: field.type,
          label: editFieldLabel,
          errormsg: editFieldError,
          require: editFieldRequired,
        };
      }
      return field;
    });
    setFeedbackformlist(data);
  };
  return (
    <div className="formcreate">
      <Modal className="modal_box" open={isModalOpen}>
        <h1>Edit</h1>
        <TextField
          className="textField"
          label="Generic Website Rating"
          variant="standard"
          size="medium"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
        <div className="modal_button">
          <Link href={"./createform"}>
            {" "}
            <Button
              onClick={() => {
                handleCancel();
                dispatch(setNewformtitle(formTitle));
              }}
              variant="text"
              color="primary"
              size="medium"
            >
              SAVE
            </Button>
          </Link>
          <Button
            onClick={handleOk}
            variant="text"
            color="primary"
            size="medium"
          >
            CANCEL
          </Button>
        </div>
      </Modal>
      <div className="createform_header">
        <div className="formcreate_header">
          <Image className="logo" src={logo} alt="logo" width={64} height={64} onClick={()=>{
            router.push('/')
          }} />
          <span>USER FEEDBACK</span>
        </div>
        <div className="formcreate_button">
          <Button 
            disabled variant="contained" color="primary" size="large">
            SAVE
          </Button>
          <Button
            onClick={() => {
              console.log(feedbackformlist);
              uploadfeedbackformData();
            }}
            variant="contained"
            color="success"
            size="large"
          >
            PUBLISH
          </Button>
        </div>{" "}
      </div>
      <div className="create_form">
        <div className="create_form_container">
          <div className="create_form_container_head">
            {" "}
            <Link href={"./"}>
              <IoChevronBack />
            </Link>
            <p>{formtitle}</p>
            <HiPencil
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          </div>
          <div>
            {!feedbackformlist ? (
              <h3 className="create_form_lable">Add Fields</h3>
            ) : (
              <div>
                {feedbackformlist.map((item) => {
                  return (
                    <div key={item.id}>
                      {item.type === "textarea" && (
                        <TextArea
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          removeField={removeField}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}
                      {item.type === "numberrating" && (
                        <NumberRating
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          removeField={removeField}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}
                      {item.type === "starrating" && (
                        <StarRating
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          removeField={removeField}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}{" "}
                      {item.type === "smile" && (
                        <Smile
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          removeField={removeField}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}{" "}
                      {item.type === "singlelineinput" && (
                        <SingleLineInput
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          removeField={removeField}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}{" "}
                      {item.type === "radiobutton" && (
                        <RadioButton
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          require={item.require}
                          options={item.options}
                          removeField={removeField}
                          radioEdit={radioEdit}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}{" "}
                      {item.type === "category" && (
                        <Category
                          id={item.id}
                          label={item.label}
                          errormsg={item.errormsg}
                          options={item.options}
                          require={item.require}
                          removeField={removeField}
                          opencloseaddfield={opencloseaddfield}
                          setRadioEdit={setRadioEdit}
                          setEditFieldId={setEditFieldId}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {showfieldoption && (
          <div className="create_form_add_options">
            <p className="create_form_add_options_title">Add fields</p>
            <div className="add_options">
              <div>
                <Image src={textarea} alt="textarea" />
                <p>Textarea</p>
              </div>

              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "textarea",
                      label: "Would you like to add a comment?*",
                      require: true,
                      errormsg: "please enter comment",
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <div className="add_options">
              <div>
                <Image src={number} alt="nummber" />
                <p>Number rating</p>
              </div>

              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "numberrating",
                      label:
                        "How likely s it that you will recommend us to your family and friends?*",
                      require: true,
                      errormsg: "please give rating",
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <div className="add_options">
              <div>
                <Image src={star} alt="star" />
                <p>Star rating</p>
              </div>

              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "starrating",
                      label: "Give a star rating for the websiite*",
                      require: true,
                      errormsg: "please give star rating",
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <div className="add_options">
              <div>
                <Image src={smile} alt="smile" />
                <p>Smile</p>
              </div>

              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "smile",
                      label: "What is your opinion of this page?",
                      require: true,
                      errormsg: "please give opinion rating",
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <div className="add_options">
              <div>
                <Image src={singleline} alt="singleline" />
                <p>Single line input </p>
              </div>

              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "singlelineinput",
                      label:
                        "Do you have any suggestions to improve our website?",
                      require: true,
                      errormsg: "please give suggestions to improve",
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <div className="add_options">
              <div>
                <Image src={radio} alt="radio" />
                <p>Radio Button</p>
              </div>
              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "radiobutton",
                      label: "Multiple choice - 1 answer",
                      require: true,
                      errormsg: "please select any one",
                      options: ["data1", "data2", "data3"],
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <div className="add_options">
              <div>
                <Image src={category} alt="category" />
                <p>Categories</p>
              </div>

              <p
                onClick={() => {
                  setFieldId(fieldId + 1);
                  setFeedbackformlist([
                    ...feedbackformlist,
                    {
                      id: fieldId,
                      type: "category",
                      label: "Pick a subject and provide your feedback:",
                      require: true,
                      errormsg: "please select any one",
                      options: ["Bug", "content", "Other"],
                    },
                  ]);
                }}
                className="add_options_plus"
              >
                <FaPlus />
              </p>
            </div>{" "}
            <p className="create_form_add_options_title">Add Logic</p>
            <div className="add_option_logic_title_switch">
              <p className="add_option_logic_title">
                Show based on URL conditions
              </p>

              <Switch
                checked={urlSwitch}
                onChange={(e) => {
                  setUrlSwitch(e.target.checked);
                }}
              />
            </div>{" "}
            <TextField
              className="add_logic_input"
              id="standard-basic"
              label="http://"
              variant="standard"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
            />
            <div className="add_option_logic_title_switch">
              <p className="add_option_logic_title">Show on a specific date</p>

              <Switch
                checked={dateSwitch}
                onChange={(e) => {
                  setDateSwitch(e.target.checked);
                }}
              />
            </div>
            <div className="add_logic_date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Start Date"
                    value={selectedDate} // Pass the current selected date
                    onChange={handleDateChange} // Update state on date change
                  />
                </DemoContainer>
              </LocalizationProvider>{" "}
            </div>
            <div className="add_option_logic_title_switch">
              <p className="add_option_logic_title">Show on a specific time</p>

              <Switch
                checked={timeSwitch}
                onChange={(e) => {
                  setTimeSwitch(e.target.checked);
                }}
              />
            </div>
            <div className="add_logic_date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    label="Select time"
                    value={timeValue}
                    onChange={handleTimeChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
        )}
        {!showfieldoption && (
          <div className="create_form_add_options">
            <div>
              {" "}
              <IoChevronBack
                className="create_form_add_options_back"
                onClick={opencloseaddfield}
              />
              <span className="create_form_add_options_label">
                Back to add fields
              </span>
            </div>
            <TextField
              className="textField "
              label="Label"
              variant="standard"
              size="medium"
              value={editFieldLabel}
              onChange={(e) => setEditFieldLabel(e.target.value)}
            />{" "}
            <Switch
              checked={editFieldRequired}
              onChange={(e) => {
                setEditFieldRequired(e.target.checked);
              }}
            />
            <span>Required</span>{" "}
            <TextField
              className="textField"
              label="Error message"
              variant="standard"
              size="medium"
              value={editFieldError}
              onChange={(e) => setEditFieldError(e.target.value)}
            />
            <span>Helper text</span>
            {radioEdit && (
              <div>
                <p className="radio_options">Options</p>
                <TextField
                  className="textField radio_input"
                  label="Radio 1"
                  variant="standard"
                  size="medium"
                  value={editFieldRadioOption1}
                  onChange={(e) => setEditFieldRadioOption1(e.target.value)}
                />{" "}
                <TextField
                  className="textField radio_input"
                  label="Radio 2"
                  variant="standard"
                  size="medium"
                  value={editFieldRadioOption2}
                  onChange={(e) => setEditFieldRadioOption2(e.target.value)}
                />{" "}
                <TextField
                  className="textField radio_input"
                  label="Radio 3"
                  variant="standard"
                  size="medium"
                  value={editFieldRadioOption3}
                  onChange={(e) => setEditFieldRadioOption3(e.target.value)}
                />{" "}
              </div>
            )}
            <div className="save_cancel">
              <Button
                onClick={() => {
                  updateformList();
                  opencloseaddfield(true);
                }}
                variant="contained"
                color="primary"
                size="large"
              >
                save
              </Button>
              <Button
                onClick={() => opencloseaddfield(true)}
                variant="contained"
                color="inherit"
                size="large"
              >
                cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
