import styles from "./Input.module.css"

import { useFieldContext } from "../Field"

export default function Input({ type = "text", name, ...props }) {
  const controlId = useFieldContext()

  return (
    <>
      <input
        type={type}
        name={name}
        id={controlId}
        {...props}
        className={styles.input}
      />
    </>
  )
}
