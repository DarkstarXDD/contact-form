import styles from "./FieldsetErrorMessage.module.css"

import useFieldsetContext from "../Fieldset/FieldsetContext"

export default function FieldsetErrorMessage() {
  const { errorId, errorMessage } = useFieldsetContext()
  const className = errorMessage ? styles.errorMessage : "visually-hidden"

  return (
    <>
      <p aria-live="assertive" id={errorId} className={className}>
        {errorMessage}
      </p>
    </>
  )
}
