import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    
      <label htmlFor="toggle-switch" className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          id="toggle-switch"
        />
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__value toggle-switch__value_left">F</span>
        <span className="toggle-switch__value toggle-switch__value_right">C</span>
      </label>
    
  );
}

export default ToggleSwitch;
