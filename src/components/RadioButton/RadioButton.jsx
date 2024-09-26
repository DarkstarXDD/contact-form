import styles from "./RadioButton.module.css"

import { useId } from "react"

import useFieldSetContext from "../Fieldset/FieldsetContext"

export default function RadioButton({ name, children, ...props }) {
  const { required } = useFieldSetContext()
  const controlId = useId()

  return (
    <label htmlFor={controlId} className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        required={required}
        id={controlId}
        {...props}
        className={styles.radioButton}
      />
      {children}
    </label>
  )
}
