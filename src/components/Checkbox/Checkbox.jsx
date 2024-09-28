import styles from "./Checkbox.module.css"

import useFieldContext from "../Field/FieldContext"

export default function Checkbox({ ...props }) {
  const { name, controlId, required, errorId } = useFieldContext()

  return (
    <div className={styles.checkboxFieldWrapper}>
      <input
        type="checkbox"
        name={name}
        required={required}
        id={controlId}
        aria-describedby={errorId}
        {...props}
        className={styles.checkbox}
      />
    </div>
  )
}
