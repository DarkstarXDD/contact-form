import styles from "./Fieldset.module.css"

import RequiredSymbol from "../RequiredSymbol"

export default function Fieldset({ legend, children, required = true }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        {legend}
        {required && <RequiredSymbol />}
      </legend>
      {children}
    </fieldset>
  )
}
