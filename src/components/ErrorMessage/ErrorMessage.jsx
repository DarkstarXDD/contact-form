import styles from "./ErrorMessage.module.css"

import useFieldContext from "../Field/FieldContext"

export default function ErrorMessage() {
  const { errorId, errorMessage } = useFieldContext()

  return (
    <>
      {errorMessage && (
        <p aria-live="assertive" id={errorId} className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </>
  )
}
