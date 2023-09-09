import styles from "./Explor.module.css"
import Exp from "../Global_Components/Exp"
import Footer from "../Global_Components/Footer"
import Subscrib from "../Global_Components/Subscrib"
export default function Explor() {
  return (
    <div className={styles.explor}>
        <div className={styles.expcom}>
          <Exp/>
        </div>
        <div className={styles.suboption}>
             <Subscrib/>
      </div>
        <div className={styles.footer}>
          <Footer/>
        </div>
    </div>
  )
}
