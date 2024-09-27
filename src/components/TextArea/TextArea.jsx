import styles from "./TextArea.module.css"

import useFieldContext from "../Field/FieldContext"

export default function TextArea({ name, ...props }) {
  const { controlId, required, errorMessage } = useFieldContext()

  return (
    <>
      <textarea
        name={name}
        required={required}
        id={controlId}
        {...props}
        className={`${styles.textArea} ${errorMessage ? styles.textAreaError : ""}`}
      />
    </>
  )
}
