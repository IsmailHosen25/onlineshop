import styles from "./HC_Css/Selectpurchase.module.css"
import Button from "../../Global_Components/Button"
export default function Selectpurchase() {
  return (
    <div className={styles.seselectpurchase}>
        
        <div className={styles.details}>
             <h1>We Are Hexashop</h1>
             <p><i>Awesome, clean & creative HTML5 Template</i></p>
             <div><Button mode={true} title="purchase Now!">Purchase Now!</Button></div>

        </div>

    </div>
  )
}
