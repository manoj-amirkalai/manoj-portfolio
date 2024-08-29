import "./RadioButton.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioButton = ({
  label,
  errormsg,
require,
  setRadio,
  radio,
  options,showError
}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="radio_option">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={radio}
            className="radio_container"
            onChange={(e)=>{setRadio(e.target.value)}}
            name="radio-buttons-group"
          >
            {options.map((values, index) => {
              return (
                <div key={index}>
                  <FormControlLabel
                    className="radio_options"
                    value={values}
                    control={<Radio />}
                    label={values}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>

      {showError && <>
      {radio<1? 
      <span className="error_msg">{require && errormsg}</span>:""}</>}
    </div>
  );
};

export default RadioButton;
