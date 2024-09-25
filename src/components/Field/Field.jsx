import styles from "./Field.module.css"

import { useId } from "react"

import { FieldContext } from "./FieldContext"

export default function Field({ children, required = true }) {
  const controlId = useId()

  return (
    <FieldContext.Provider value={{ controlId, required }}>
      <div className={styles.fieldWrapper}>{children}</div>
    </FieldContext.Provider>
  )
}
