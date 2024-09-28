import styles from "./Field.module.css"

import { useId } from "react"

import { FieldContext } from "./FieldContext"

export default function Field({
  name,
  children,
  required = true,
  errors,
  layout,
}) {
  const controlId = useId()
  const errorId = useId()

  const errorMessage = (errors && errors[name]) || null

  const className =
    layout === "row" ? styles.fieldWrapperRow : styles.fieldWrapper

  return (
    <FieldContext.Provider
      value={{ name, controlId, required, errorId, errorMessage }}
    >
      <div className={className}>{children}</div>
    </FieldContext.Provider>
  )
}
