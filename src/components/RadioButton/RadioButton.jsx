import styles from "./RadioButton.module.css"

import { useId } from "react"

import useFieldsetContext from "../Fieldset/FieldsetContext"

export default function RadioButton({ children, ...props }) {
  const { name, required, errorId } = useFieldsetContext()
  const controlId = useId()

  return (
    <label htmlFor={controlId} className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        required={required}
        aria-describedby={errorId}
        id={controlId}
        {...props}
        className={styles.radioButton}
      />
      {children}
    </label>
  )
}
