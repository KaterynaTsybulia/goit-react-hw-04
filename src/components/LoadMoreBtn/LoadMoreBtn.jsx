import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick, disabled }) {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.loadMoreBtn}
        onClick={onClick}
        disabled={disabled}
      >
        Load more
      </button>
    </div>
  );
}
