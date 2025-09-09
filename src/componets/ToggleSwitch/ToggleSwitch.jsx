import "./ToggleSwitch.css";
import { useEffect, useState } from "react";

function ToggleSwitch() {

const [tempUnit, setTempUnit] = useState("F");


function handleChange() {
    if (tempUnit === "F") {
        setTempUnit("C");
    } else {
        setTempUnit("F");
    }
}


// useEffect(() => {
//     console.log("Temperature unit changed to:", tempUnit);
// });

  return (
    
      <label htmlFor="toggle-switch" className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          id="toggle-switch"
          onChange={handleChange}
        />
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__value toggle-switch__value_left">F</span>
        <span className="toggle-switch__value toggle-switch__value_right">C</span>
      </label>
    
  );
}

export default ToggleSwitch;
