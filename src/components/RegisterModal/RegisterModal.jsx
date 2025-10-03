import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import useForm from "../../hooks/useForm";

const RegisterModal = ({ isOpen, onClose, onSubmit }) => {
  const defaultValues = {
    name: "",
    avatar: "",
    email: "",
    password: "",
  };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      name: values.name,
      avatar: values.avatar,
      email: values.email,
      password: values.password,
    };
    onSubmit(userData, resetForm);
  }

  // Check if all required fields are filled
  const isFormValid =
    values.name.trim() !== "" &&
    values.avatar.trim() !== "" &&
    values.email.trim() !== "" &&
    values.password.trim() !== "";

  return (
    <ModalWithForm
      title="Sign Up"
      name="new-user"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
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
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          id="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          value={values.name}
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="text"
          className="modal__input"
          name="avatar"
          id="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
          required
        />
      </label>
       <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__submit-btn ${
            !isFormValid ? "modal__submit-btn_disabled" : ""
          }`}
          disabled={!isFormValid}
        >
            Sign up
        </button>
        <button type="button" className="modal__signup-btn">
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
