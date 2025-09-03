import "../ModalWithForm/ModalWithForm.css";

const AddItemModal = ({ isOpen, onClose, onSubmit }) => (
  <ModalWithForm
    title="Add Item"
    name="add-item"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={onSubmit}
    buttonText="Add Item"
  >
    <label className="modal__label">
      Name
      <input
        type="text"
        className="modal__input"
        name="item-name"
        id="clothing-name"
        minLength="1"
        maxLength="30"
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
        placeholder="Image Url"
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
            name="weather-type"
            value="rainy"
            required
          />
           <label className="modal__label">
          Warm
        </label>
        </div>
       <div>
          <input
            type="radio"
            className="modal__radio"
            name="weather-type"
            value="rainy"
            required
          />
           <label className="modal__label">
          Warm
        </label>
        </div>
              <div>
          <input
            type="radio"
            className="modal__radio"
            name="weather-type"
            value="rainy"
            required
          />
           <label className="modal__label">
          Warm
        </label>
        </div>
      </div>
    </fieldset>
  </ModalWithForm>
);

export default AddItemModal;
