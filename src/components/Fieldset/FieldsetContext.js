import { createContext, useContext } from "react"

export const FieldsetContext = createContext()

export default function useFieldsetContext() {
  const context = useContext(FieldsetContext)

  if (!context) {
    throw new Error(
      "Fieldset sub components must be used inside a Fieldset component"
    )
  }
  return context
}
