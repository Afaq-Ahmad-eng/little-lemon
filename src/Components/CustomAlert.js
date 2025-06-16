import styles from './CustomAlert.module.css';
function CustomAlert({ isOpen, CloseCustomAlert, children }) {
   if (!isOpen) return null;
  return (
  <div className={styles.backdrop}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeBtn} onClick={CloseCustomAlert}><strong>x</strong></button>
      </div>
    </div>
  )
}

export default CustomAlert