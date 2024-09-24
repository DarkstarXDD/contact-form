import styles from "./TextArea.module.css"

import useFieldContext from "../Field/FieldContext"

export default function TextArea({ name, ...props }) {
  const controlId = useFieldContext()

  return (
    <>
      <textarea
        name={name}
        id={controlId}
        {...props}
        className={styles.textarea}
      />
    </>
  )
}
