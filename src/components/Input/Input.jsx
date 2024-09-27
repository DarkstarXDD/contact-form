import styles from "./Input.module.css"

import useFieldContext from "../Field/FieldContext"

import ErrorMessage from "../ErrorMessage"

export default function Input({ type = "text", name, ...props }) {
  const { controlId, required, errorId } = useFieldContext()

  return (
    <>
      <input
        type={type}
        name={name}
        required={required}
        id={controlId}
        {...props}
        className={styles.input}
        aria-describedby={errorId}
      />
      <ErrorMessage>Error Message</ErrorMessage>
    </>
  )
}
