import { useFieldContext } from "../Field"

export default function Label({ children }) {
  const controlId = useFieldContext()
  return (
    <>
      <label htmlFor={controlId}>{children}</label>
    </>
  )
}
