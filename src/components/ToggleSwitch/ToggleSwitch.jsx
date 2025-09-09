import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import "./ToggleSwitch.css";
function ToggleSwitch() {
  const { currentTempUnit, handleTempUnitChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label htmlFor="toggle-switch" className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        id="toggle-switch"
        onChange={handleTempUnitChange}
      />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__value toggle-switch__value_left">F</span>
      <span className="toggle-switch__value toggle-switch__value_right">C</span>
    </label>
  );
}

export default ToggleSwitch;
