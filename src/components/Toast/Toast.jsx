import styles from "./Toast.module.css"

export default function Toast({ icon, title, message }) {
  return (
    <div className={styles.toastWrapper}>
      <div className={styles.toast}>
        <img className={styles.toastIcon} src={icon} alt="" />
        <p className={styles.toastTitle}>{title}</p>
        <p className={styles.toastText}>{message}</p>
      </div>
    </div>
  )
}
