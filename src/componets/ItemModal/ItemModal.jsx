import "../ItemModal/ItemModal.css"


const ItemModal = ({selectedItem, isOpen, onClose}) => (
  <div className={`modal ${isOpen ? "modal_open" : ""}`}>
    <div className="modal__image">
      <span className="modal__close-btn modal__close-img-btn" onClick={onClose}>&times;</span>
      <h2 className="modal__caption"> {selectedItem.name}</h2>
      <img src={selectedItem.link} className="modal__image" />
    </div>
  </div>
);

export default ItemModal;