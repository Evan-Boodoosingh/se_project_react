import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import greyIcon from "../../assets/grey.svg";
import "./ItemModal.css";

const ItemModal = ({ onDeleteClick, selectedItem, isOpen, onClose }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleOnDeleteClick = () => {
    onDeleteClick(selectedItem);
  };
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__image-container">
        <button
          className="modal__close-btn modal__close-img-btn"
          onClick={onClose}
        >
          <img src={greyIcon} alt="Close" className="modal__close-icon" />
        </button>
        <img src={selectedItem.imageUrl} className="modal__image" />
        <div className="modal__outer">
          {" "}
          <div className="modal__container-top">
            <h2 className="modal__caption modal__caption-top">
              {" "}
              {selectedItem.name}
            </h2>
            {currentUser && selectedItem.owner === currentUser._id && (
              <button
                onClick={handleOnDeleteClick}
                className="modal__delete-btn"
              >
                Delete item
              </button>
            )}
          </div>
          <p
            className="modal__caption modal-caption-bottom"
            style={{ textTransform: "capitalize" }}
          >
            Weather: {selectedItem.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
