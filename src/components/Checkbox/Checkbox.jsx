import styles from "./Checkbox.module.css"

import { useId } from "react"

export default function Checkbox({ name, children, ...props }) {
  const controlId = useId()

  return (
    <div className={styles.checkboxFieldWrapper}>
      <input
        type="checkbox"
        name={name}
        id={controlId}
        {...props}
        className={styles.checkbox}
      />
      <label htmlFor={controlId} className={styles.checkboxLabel}>
        {children}
      </label>
    </div>
  )
}
