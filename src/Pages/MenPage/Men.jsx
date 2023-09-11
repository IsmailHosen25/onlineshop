import styles from './Men.module.css'
import Pagebanar from "../Global_Components/Pagebanar"
import Footer from "../Global_Components/Footer"
import Subscrib from "../Global_Components/Subscrib"
import Productspage from '../Global_Components/Productspage'
import Exp from '../Global_Components/Exp'

import men_1 from "../../images/men-01.jpg"
import men_2 from "../../images/men-02.jpg"
import men_3 from "../../images/men-03.jpg"

export default function Men() {
  const products=[
    {
      img:men_1,
      title:"Love Nana'20",
      price:150.00,
      quntity:1
    },
    {
      img:men_2,
      title:"Classic Spring",
      price:120.00,
      quntity:1
    },{
      img:men_3,
      title:"Classic Spring",
      price:120.00,
      quntity:1
    },  {
      img:men_1,
      title:"Love Nana'20",
      price:150.00,
      quntity:1
    },
    {
      img:men_2,
      title:"Classic Spring",
      price:120.00,
      quntity:1
    },{
      img:men_3,
      title:"Classic Spring",
      price:120.00,
      quntity:1
    }
  ]
  return (
    <div className={styles.men}>
       <div className={styles.bannar}>
            <Pagebanar classes={styles.pagebannar} h1={"Check Our Men's Latest Products"} p={"Awesome & Creative HTML CSS layout by TemplateMo"}/>
       </div>

       <div className={styles.products}>
        <Productspage title={"Our Men's Latest Products"} products={products}/>
       </div>
       <div className={styles.menexpcom}>
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
