import styles from "./Fieldset.module.css"

export default function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  )
}
