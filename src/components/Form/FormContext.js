import { createContext, useContext } from "react"

export const FormContext = createContext()

export default function useFormContext() {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error("Form sub components must be used inside a Form component")
  }
  return context
}
