import Modal from 'react-modal';
import css from './ImageModal.module.css';


Modal.setAppElement("#root");

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overlad: '',
    },
  };


export default function ImageModal({ isOpen, onRequestClose, imageData }) {
    if(!imageData) return null;

    const {regular, alt_description, likes, description} = imageData;

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <div>
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

