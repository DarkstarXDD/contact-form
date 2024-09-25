import styles from "./RadioButton.module.css"

import { useId } from "react"

export default function RadioButton({ name, children, ...props }) {
  const controlId = useId()
  return (
    <label htmlFor={controlId} className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        id={controlId}
        {...props}
        className={styles.radioButton}
      />
      {children}
    </label>
  )
}
