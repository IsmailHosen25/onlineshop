import styles from "./GC_Css/Textbox.module.css"
export default function ({h,p}) {
  return (
    <div className={styles.textbox}>
        <h2>{h}</h2>
        <p><i>{p}</i></p>
    </div>
  )
}
