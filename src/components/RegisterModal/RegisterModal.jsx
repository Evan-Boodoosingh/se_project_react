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

  return (
    <ModalWithForm
      title="Sign Up"
      name="new-user"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      
      buttonText="Sign Up"
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
    </ModalWithForm>
  );
};

export default RegisterModal;