import css from './ImageCard.module.css';


export default function ImageCard({ alt, src, onClick }) {
    return (
    <div className={css.thumb}>
        <img className={css.img} src={src} alt={alt} onClick={onClick}  />
    </div>
    );
}
