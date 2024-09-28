import styles from "./Fieldset.module.css"

import RequiredSymbol from "../RequiredSymbol"

import { useId } from "react"

import useFormContext from "../Form/FormContext"
import { FieldsetContext } from "./FieldsetContext"

export default function Fieldset({ name, legend, children, required = true }) {
  const { errors } = useFormContext()

  const errorId = useId()
  const errorMessage = (errors && errors[name]) || null

  return (
    <FieldsetContext.Provider value={{ name, required, errorId, errorMessage }}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          {legend}
          {required && <RequiredSymbol />}
        </legend>
        {children}
      </fieldset>
    </FieldsetContext.Provider>
  )
}
