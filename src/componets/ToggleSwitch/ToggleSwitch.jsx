import "./ToggleSwitch.css";

function ToggleSwitch() {
    return (
        <div className="toggle-switch">
            <label className="toggle-switch__label">
                <input type="checkbox" className="toggle-switch__checkbox" />
            </label>
        </div>
    );
}

export default ToggleSwitch;