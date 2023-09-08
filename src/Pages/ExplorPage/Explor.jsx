import styles from "./Explor.module.css"
import Exp from "../Global_Components/Exp"
export default function Explor() {
  return (
    <div className={styles.explor}>
        <div className={styles.expcom}>
          <Exp/>
        </div>
    </div>
  )
}
