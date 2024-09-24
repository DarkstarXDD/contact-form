import { createContext, useContext } from "react"

export const FieldContext = createContext()

export default function useFieldContext() {
  const context = useContext(FieldContext)

  if (!context) {
    throw new Error(
      "Field sub components must be used inside a Field component"
    )
  }
  return context
}
