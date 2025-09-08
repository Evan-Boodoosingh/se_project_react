import "./ModalWithForm.css";
import unionIcon from '../../assets/union.png';

const ModalWithForm = ({ title, name, isOpen, onClose, onSubmit, children, buttonText }) => (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
        <div className="modal__content">
            <button className="modal__close-btn" onClick={onClose}></button>
            <h2 className="modal__title">{title}</h2>
            <form className="modal__form" name={name} onSubmit={onSubmit}>
                {children}
                <button type="submit" className="modal__submit-btn">{buttonText}</button>
            </form>
        </div>
    </div>
);

export default ModalWithForm;