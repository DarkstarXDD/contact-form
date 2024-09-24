import styles from "./Field.module.css"

import { createContext, useContext, useId } from "react"

const FieldContext = createContext()

export function useFieldContext() {
  const context = useContext(FieldContext)

  if (!context) {
    throw new Error(
      "Field sub components must be used inside a Field component"
    )
  }
  return context
}

export default function Field({ children }) {
  const controlId = useId()

  return (
    <FieldContext.Provider value={controlId}>
      <div className={styles.fieldWrapper}>{children}</div>
    </FieldContext.Provider>
  )
}
