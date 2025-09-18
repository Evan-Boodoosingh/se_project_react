import "./DeleteModal.css";

const DeleteModal = ({ handleDelete, isOpen, onClose }) => (
  <div className={`modal ${isOpen ? "modal_open" : ""}`}>
    <div className="delete-modal__delete-container">
      <button
        className="delete-modal__close-btn delete-modal__close-img-btn"
        onClick={onClose}
      ></button>
      <div>
        <button onClick={handleDelete} className="delete-modal__btn-delete">
          Delete item
        </button>
        <button className="delete-modal__btn-cancel"></button>
      </div>
    </div>
  </div>
);

export default DeleteModal;
