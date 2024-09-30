import styles from "./ErrorMessage.module.css"

import useFieldContext from "../Field/FieldContext"

export default function ErrorMessage() {
  const { errorId, errorMessage } = useFieldContext()
  const className = errorMessage ? styles.errorMessage : "visually-hidden"

  return (
    <>
      <p aria-live="assertive" id={errorId} className={className}>
        {errorMessage}
      </p>
    </>
  )
}
