import styles from "./ErrorMessage.module.css"

import useFieldContext from "../Field/FieldContext"

export default function ErrorMessage({ children }) {
  const { errorId } = useFieldContext()

  return (
    <p aria-live="assertive" id={errorId} className={styles.errorMessage}>
      {children}
    </p>
  )
}
