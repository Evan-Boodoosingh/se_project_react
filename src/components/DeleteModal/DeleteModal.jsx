import "./DeleteModal.css";

const DeleteModal = ({ handleDelete, isOpen, onClose }) => (
  <div className={`modal ${isOpen ? "modal_open" : ""}`}>
    <div className="delete-modal__delete-container">
      <div className="delete-modal_container-inner">
      <p className="delete-modal__caption">Are you sure you want to delete this item?
This action is irreversible.</p>
      <button
        className="delete-modal__close-btn delete-modal__close-img-btn"
        onClick={onClose}
      ></button>
      <div className="delete-modal__button-container">
        <button onClick={handleDelete} className="delete-modal__btn-delete">
          Yes, delete item
        </button>
        <button className="delete-modal__btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
);

export default DeleteModal;
