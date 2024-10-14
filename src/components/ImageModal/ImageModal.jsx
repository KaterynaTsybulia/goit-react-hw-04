import Modal from 'react-modal';
import css from './ImageModal.module.css';


Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageData }) {
    if(!imageData) return null;

    const {regular, alt_description, likes, description} = imageData;

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Example Modal"
                className={css.modal}
                overlayClassName={css.overlay}
            >
            <div className={css.content}>
                <img  src={regular} alt={alt_description} className={css.image} />
                <p>
                    <strong>Likes:</strong> {likes}
                </p>
                <p>
                    <strong>Description:</strong> {description}
                </p>
            </div>
            </Modal>
        );
}

