import styles from "./Toast.module.css"

import { useEffect } from "react"

import { FiX } from "react-icons/fi"

export default function Toast({
  icon,
  title,
  message,
  isToastVisible,
  closeToast,
}) {
  const className = isToastVisible ? styles.toastWrapper : "visually-hidden"

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        closeToast()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div aria-live="assertive" className={className}>
      <div className={styles.toast}>
        <img className={styles.toastIcon} src={icon} alt="" />
        <p className={styles.toastTitle}>{isToastVisible ? title : ""}</p>
        <p className={styles.toastText}>{isToastVisible ? message : ""}</p>
        <button
          aria-label="Dismiss Message"
          className={styles.button}
          onClick={closeToast}
        >
          <FiX className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  )
}
