import styles from "./Fieldset.module.css"

import RequiredSymbol from "../RequiredSymbol"

import { FieldsetContext } from "./FieldsetContext"

export default function Fieldset({ legend, children, required = true }) {
  return (
    <FieldsetContext.Provider value={{ required }}>
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
