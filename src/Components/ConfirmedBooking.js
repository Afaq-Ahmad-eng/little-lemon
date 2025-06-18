import styles from './ConfirmedBooking.module.css';

function ConfirmedBooking({ isOpen, CloseCustomAlert, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeBtn} onClick={CloseCustomAlert}>
          <strong>x</strong>
        </button>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
