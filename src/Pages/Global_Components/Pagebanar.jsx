import styles from "./GC_Css/Pagebanar.module.css"
export default function Pagebanar({classes, h1,p}) {
  return (
    <div className={classes}>
        <div className={styles.heading}>
               <h1><b>{h1}</b></h1>
               <p><i>{p}</i></p>
        </div>
    </div>
  )
}
