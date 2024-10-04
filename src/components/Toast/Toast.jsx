import styles from "./Toast.module.css"

export default function Toast({ isFormValid, icon, title, message }) {
  const className = isFormValid ? styles.toastWrapper : "visually-hidden"

  return (
    <div aria-live="assertive" className={className}>
      <div className={styles.toast}>
        <img className={styles.toastIcon} src={icon} alt="" />
        <p className={styles.toastTitle}>{isFormValid ? title : ""}</p>
        <p className={styles.toastText}>{isFormValid ? message : ""}</p>
      </div>
    </div>
  )
}
