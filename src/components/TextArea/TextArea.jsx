import styles from "./TextArea.module.css"

import useFieldContext from "../Field/FieldContext"

export default function TextArea({ name, ...props }) {
  const { controlId, required } = useFieldContext()

  return (
    <>
      <textarea
        name={name}
        required={required}
        id={controlId}
        {...props}
        className={styles.textarea}
      />
    </>
  )
}
