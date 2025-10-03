import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import useForm from "../../hooks/useForm";

const LogInModal = ({ isOpen, onClose, onSubmit }) => {
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

  return (
    <ModalWithForm
      title="Log In"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
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
      <button className="signup_btn">or Sign Up</button>
    </ModalWithForm>
  );
};

export default LogInModal;

  