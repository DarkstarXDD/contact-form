import styles from "./Input.module.css"

export default function Input({ type = "text", name, id, ...props }) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        {...props}
        className={styles.input}
      />
    </>
  )
}
