import styles from "./GC_Css/Exp.module.css"
import exp1 from "../../images/explore-image-01.jpg"
import exp2 from "../../images/explore-image-02.jpg"
import Button from "./Button"
import Textbox from "./Textbox"
import Imagebox from "./Imagebox"
export default function Exp() {
  return (
    <div className={styles.exp}>
        <div className={styles.expleft}>
            <h1><b>Explore Our Products</b></h1>
            <p className={styles.p}>
            You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish
            </p>
            <p className={styles.ep}>
            <i className="fa-solid fa-quote-left"></i>
            <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
            </p>
            <p className={styles.p}>
            There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.
            </p>
            <p className={styles.p}>
            If this template is beneficial for your website or business, please kindly support us a little via PayPal. Please also tell your friends about our great website. Thank you.
            </p>
            <Button mode={false} title="explore">Discover More</Button>
        </div>
        <div className={styles.expright}>
              <Textbox h="Leather Bags" p="Latest Collection"/>
              <Imagebox img={exp1}/>
              <Imagebox img={exp2}/>
              <Textbox h="Different Types" p="Over 304 Products"/>
        </div>
    </div>
  )
}
