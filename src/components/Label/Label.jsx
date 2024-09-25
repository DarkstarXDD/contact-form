import styles from "./Label.module.css"

import useFieldContext from "../Field/FieldContext"

import RequiredSymbol from "../RequiredSymbol"

export default function Label({ children }) {
  const { controlId, required } = useFieldContext()

  return (
    <div className={styles.labelWrapper}>
      <label htmlFor={controlId}>{children}</label>
      {required && <RequiredSymbol />}
    </div>
  )
}
