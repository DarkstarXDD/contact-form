import styles from "./Input.module.css"

import useFieldContext from "../Field/FieldContext"

export default function Input({ type = "text", ...props }) {
  const { name, controlId, required, errorId, errorMessage } = useFieldContext()

  return (
    <>
      <input
        type={type}
        name={name}
        required={required}
        id={controlId}
        aria-invalid={!!errorMessage}
        {...props}
        className={`${styles.input} ${errorMessage ? styles.inputError : ""}`}
        aria-describedby={errorId}
      />
    </>
  )
}
