import styles from "./Toast.module.css"

export default function Toast({ isFormValid, icon, title, message }) {
  const className = isFormValid ? styles.toastWrapper : "visually-hidden"

  return (
    <div aria-live="polite" className={className}>
      <div className={styles.toast}>
        <img className={styles.toastIcon} src={icon} alt="" />
        <p className={styles.toastTitle}>{title}</p>
        <p className={styles.toastText}>{message}</p>
      </div>
    </div>
  )
}
