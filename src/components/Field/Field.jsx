import styles from "./Field.module.css"

import { useId } from "react"

import { FieldContext } from "./FieldContext"

export default function Field({ name, children, required = true, errors }) {
  const controlId = useId()
  const errorId = useId()

  const errorMessage = (errors && errors[name]) || null

  return (
    <FieldContext.Provider
      value={{ name, controlId, required, errorId, errorMessage }}
    >
      <div className={styles.fieldWrapper}>{children}</div>
    </FieldContext.Provider>
  )
}
