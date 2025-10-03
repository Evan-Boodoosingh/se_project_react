import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import useForm from "../../hooks/useForm";

const AddItemModal = ({ isOpen, onClose, onSubmit }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values, resetForm);
  }

  // Check if all required fields are filled
  const isFormValid =
    values.name.trim() !== "" &&
    values.imageUrl.trim() !== "" &&
    values.weather !== "";

  return (
    <ModalWithForm
      title="New Garment"
      name="add-item"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
      isButtonDisabled={!isFormValid}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          id="clothing-name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          value={values.name}
          required
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="text"
          className="modal__input"
          name="imageUrl"
          id="clothing-image"
          placeholder="Image URL"
          onChange={handleChange}
          value={values.imageUrl}
          required
        />
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-group">
          <div>
            <input
              type="radio"
              className="modal__radio"
              name="weather"
              value="hot"
              checked={values.weather === "hot"}
              onChange={handleChange}
              required
            />
            <label className="modal__label">Hot</label>
          </div>
          <div>
            <input
              type="radio"
              className="modal__radio"
              name="weather"
              value="warm"
              onChange={handleChange}
              checked={values.weather === "warm"}
              required
            />
            <label className="modal__label">Warm</label>
          </div>
          <div>
            <input
              type="radio"
              className="modal__radio"
              name="weather"
              value="cold"
              onChange={handleChange}
              checked={values.weather === "cold"}
              required
            />
            <label className="modal__label">Cold</label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
