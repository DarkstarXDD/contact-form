import styles from "./RequiredSymbol.module.css"

export default function RequiredSymbol() {
  return (
    <p aria-hidden={true} className={styles.requiredSymbol}>
      *
    </p>
  )
}
