import { useContext } from "react"

import { FieldContext } from "../Field"

export default function Label({ children }) {
  const controlId = useContext(FieldContext)
  return (
    <>
      <label htmlFor={controlId}>{children}</label>
    </>
  )
}
