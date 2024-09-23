import styles from "./TextArea.module.css"

export default function TextArea({ name, id, ...props }) {
  return (
    <>
      <textarea name={name} id={id} {...props} className={styles.textarea} />
    </>
  )
}
