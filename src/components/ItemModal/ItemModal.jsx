import "./ItemModal.css";

const ItemModal = ({ selectedItem, isOpen, onClose }) => (
  <div className={`modal ${isOpen ? "modal_open" : ""}`}>
    <div className="modal__image-container">
      <button
        className="modal__close-btn modal__close-img-btn"
        onClick={onClose}
      ></button>
      <img src={selectedItem.link} className="modal__image" />
      <h2 className="modal__caption"> {selectedItem.name}</h2>
    </div>
  </div>
);

export default ItemModal;
