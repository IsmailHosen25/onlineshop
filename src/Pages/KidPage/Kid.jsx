import styles from './Kid.module.css'
import Pagebanar from "../Global_Components/Pagebanar"
import Footer from "../Global_Components/Footer"
import Subscrib from "../Global_Components/Subscrib"
import Productspage from '../Global_Components/Productspage'
import Exp from '../Global_Components/Exp'


import kid_1 from "../../images/kid-01.jpg"
import kid_2 from "../../images/kid-02.jpg"
import kid_3 from "../../images/kid-03.jpg"


const products=[
  {
    img:kid_1,
    title:"School collection",
    price:435.00,
    quntity:1
  },
  {
    img:kid_2,
    title:"Summer Cap",
    price:80.00,
    quntity:1
  },{
    img:kid_3,
    title:"Classic Kid",
    price:1230.00,
    quntity:1
  },  {
    img:kid_1,
    title:"School collection",
    price:435.00,
    quntity:1
  },
  {
    img:kid_2,
    title:"Summer Cap",
    price:80.00,
    quntity:1
  },{
    img:kid_3,
    title:"Classic Spring",
    price:1230.00,
    quntity:1
  }
]


export default function Kid() {
  return (
    <div className={styles.kid}>
    <div className={styles.bannar}>
         <Pagebanar classes={styles.pagebannar} h1={"Check Our Kid's Latest Products"} p={"Awesome & Creative HTML CSS layout by TemplateMo"}/>
    </div>

    <div className={styles.products}>
        <Productspage title={"Our Kid's Latest Products"} products={products}/>
       </div>
       <div className={styles.kidexpcom}>
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