import styles from "./FieldsetErrorMessage.module.css"

import useFieldsetContext from "../Fieldset/FieldsetContext"

export default function FieldsetErrorMessage() {
  const { errorId, errorMessage } = useFieldsetContext()

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
