import styles from "./Input.module.css"

import useFieldContext from "../Field/FieldContext"

export default function Input({ type = "text", name, ...props }) {
  const { controlId, required } = useFieldContext()

  return (
    <>
      <input
        type={type}
        name={name}
        required={required}
        id={controlId}
        {...props}
        className={styles.input}
      />
    </>
  )
}
