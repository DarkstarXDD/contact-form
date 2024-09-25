import styles from "./Field.module.css"

import { useId } from "react"

import { FieldContext } from "./FieldContext"

export default function Field({ children, layout = "column" }) {
  const controlId = useId()

  return (
    <FieldContext.Provider value={controlId}>
      <div
        className={
          layout === "column"
            ? styles.fieldWrapperColumn
            : styles.fieldWrapperRow
        }
      >
        {children}
      </div>
    </FieldContext.Provider>
  )
}
