import useFieldContext from "../Field/FieldContext"

export default function Label({ children }) {
  const controlId = useFieldContext()
  return (
    <>
      <label htmlFor={controlId}>{children}</label>
    </>
  )
}
