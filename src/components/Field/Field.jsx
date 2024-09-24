import styles from "./Field.module.css"

import { createContext, useId } from "react"

export const FieldContext = createContext()

export default function Field({ children }) {
  const controlId = useId()

  return (
    <FieldContext.Provider value={controlId}>
      <div className={styles.fieldWrapper}>{children}</div>
    </FieldContext.Provider>
  )
}
