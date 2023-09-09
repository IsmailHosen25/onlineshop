import styles from "./about.module.css"
import Pagebanar from "../Global_Components/Pagebanar"
import Subscrib from "../Global_Components/Subscrib"
import Footer from "../Global_Components/Footer"
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.bannar}>
          <Pagebanar classes={styles.pagebannar} h1={"About Our Company"} p={"Awesome, clean & creative HTML5 Template"}/>
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
