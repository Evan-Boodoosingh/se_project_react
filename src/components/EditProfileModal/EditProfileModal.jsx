import React, { useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, onSubmit, errorMessage }) => {
  const currentUser = useContext(CurrentUserContext);

  const defaultValues = {
    name: "",
    avatar: "",
  };

  const { values, handleChange, resetForm, setValues } = useForm(defaultValues);

  // Pre-fill form with current user data when modal opens
  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      name: values.name,
      avatar: values.avatar,
    };
    onSubmit(userData, resetForm);
  }

  // Check if all required fields are filled and data has changed
  const isFormValid = values.name.trim() !== "" && values.avatar.trim() !== "";

  const hasDataChanged =
    currentUser &&
    (values.name !== currentUser.name ||
      values.avatar !== (currentUser.avatar || ""));

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save changes"
      isButtonDisabled={!isFormValid || !hasDataChanged}
      errorMessage={errorMessage}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          id="edit-name"
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
          type="url"
          className="modal__input"
          name="avatar"
          id="edit-avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
          required
        />
      </label>
      
    </ModalWithForm>
  );
};

export default EditProfileModal;
