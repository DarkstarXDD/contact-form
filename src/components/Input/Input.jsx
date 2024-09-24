import styles from "./Input.module.css"

import { useContext } from "react"

import { FieldContext } from "../Field"

export default function Input({ type = "text", name, ...props }) {
  const controlId = useContext(FieldContext)

  return (
    <>
      <input
        type={type}
        name={name}
        id={controlId}
        {...props}
        className={styles.input}
      />
    </>
  )
}
