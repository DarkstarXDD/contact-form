import styles from "./TextArea.module.css"

import { useContext } from "react"

import { FieldContext } from "../Field"

export default function TextArea({ name, ...props }) {
  const controlId = useContext(FieldContext)

  return (
    <>
      <textarea
        name={name}
        id={controlId}
        {...props}
        className={styles.textarea}
      />
    </>
  )
}
