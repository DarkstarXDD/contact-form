import styles from "./TextArea.module.css"

import useFieldContext from "../Field/FieldContext"

export default function TextArea({ ...props }) {
  const { name, controlId, required, errorId, errorMessage } = useFieldContext()

  return (
    <>
      <textarea
        name={name}
        required={required}
        id={controlId}
        aria-invalid={!!errorMessage}
        aria-describedby={errorId}
        {...props}
        className={`${styles.textArea} ${errorMessage ? styles.textAreaError : ""}`}
      />
    </>
  )
}
