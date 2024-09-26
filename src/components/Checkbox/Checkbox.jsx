import styles from "./Checkbox.module.css"

import { useId } from "react"

import RequiredSymbol from "../RequiredSymbol"

export default function Checkbox({
  name,
  children,
  required = true,
  ...props
}) {
  const controlId = useId()

  return (
    <div className={styles.checkboxFieldWrapper}>
      <input
        type="checkbox"
        name={name}
        required={required}
        id={controlId}
        {...props}
        className={styles.checkbox}
      />
      <label htmlFor={controlId} className={styles.checkboxLabel}>
        {children}
        {required && <RequiredSymbol />}
      </label>
    </div>
  )
}
