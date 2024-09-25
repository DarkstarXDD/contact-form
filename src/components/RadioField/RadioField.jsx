import styles from "./RadioField.module.css"

import { useId } from "react"

import { FieldContext } from "../Field/FieldContext"

export default function RadioField({ children }) {
  const controlId = useId()

  return (
    <FieldContext.Provider value={controlId}>
      <div className={styles.radioFieldWrapper}>{children}</div>
    </FieldContext.Provider>
  )
}
