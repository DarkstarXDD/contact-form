import styles from "./Field.module.css"

import { useId } from "react"

import { FieldContext } from "./FieldContext"

export default function Field({ children, required = true }) {
  const controlId = useId()
  const errorId = useId()

  return (
    <FieldContext.Provider value={{ controlId, required, errorId }}>
      <div className={styles.fieldWrapper}>{children}</div>
    </FieldContext.Provider>
  )
}
