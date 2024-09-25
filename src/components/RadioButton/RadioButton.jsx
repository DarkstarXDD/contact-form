import styles from "./RadioButton.module.css"

import useFieldContext from "../Field/FieldContext"

export default function RadioButton({ name, ...props }) {
  const controlId = useFieldContext()
  return (
    <input
      type="radio"
      name={name}
      id={controlId}
      {...props}
      className={styles.radioButton}
    />
  )
}
