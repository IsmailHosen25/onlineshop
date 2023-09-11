import styles from './Women.module.css'
import Pagebanar from "../Global_Components/Pagebanar"
import Footer from "../Global_Components/Footer"
import Subscrib from "../Global_Components/Subscrib"
import Productspage from '../Global_Components/Productspage'
import Exp from '../Global_Components/Exp'

import women_1 from "../../images/women-01.jpg"
import women_2 from "../../images/women-02.jpg"
import women_3 from "../../images/women-03.jpg"

const  products=[
  {
    img:women_1,
    title:"New Green jacket",
    price:750.00,
    quntity:1
  },
  {
    img:women_2,
    title:"Spring Collection",
    price:570.00,
    quntity:1
  },{
    img:women_3,
    title:"Classic Dress",
    price:990.00,
    quntity:1
  },  {
    img:women_1,
    title:"New Green jacket",
    price:750.00,
    quntity:1
  },
  {
    img:women_2,
    title:"Spring Collection",
    price:570.00,
    quntity:1
  },{
    img:women_3,
    title:"Classic Dress",
    price:990.00,
    quntity:1
  }
]
export default function Women() {
  return (
    <div className={styles.women}>
    <div className={styles.bannar}>
         <Pagebanar classes={styles.pagebannar} h1={"Check Our Women's Latest Products"} p={"Awesome & Creative HTML CSS layout by TemplateMo"}/>
    </div>

    <div className={styles.products}>
        <Productspage title={"Our Women's Latest Products"} products={products}/>
       </div>
       <div className={styles.womenexpcom}>
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