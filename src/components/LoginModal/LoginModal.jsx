import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import useForm from "../../hooks/useForm";

const LogInModal = ({
  isOpen,
  onClose,
  onSubmit,
  onSwitchToRegister,
  errorMessage,
}) => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: values.email,
      password: values.password,
    };
    onSubmit(userData, resetForm);
  }

  // Check if all required fields are filled
  const isFormValid =
    values.email.trim() !== "" && values.password.trim() !== "";

  return (
    <ModalWithForm
      title="Log In"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
      isButtonDisabled={!isFormValid}
      customButtons={true}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          required
        />
      </label>
      {errorMessage && (
        <div className="modal__error-message">{errorMessage}</div>
      )}
      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__submit-btn ${
            !isFormValid ? "modal__submit-btn_disabled" : ""
          }`}
          disabled={!isFormValid}
        >
          Log In
        </button>
        <button
          type="button"
          className="modal__signup-btn"
          onClick={onSwitchToRegister}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LogInModal;
