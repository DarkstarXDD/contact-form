import styles from "./Field.module.css"

export default function Field({ children }) {
  return (
    <>
      <div className={styles.fieldWrapper}>{children}</div>
    </>
  )
}
