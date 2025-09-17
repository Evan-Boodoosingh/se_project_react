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

  return (
    <ModalWithForm
      title="New Garment"
      name="add-item"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      
      buttonText="Add garment"
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
