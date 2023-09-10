import styles from "./Home.module.css"
import Catagorymanu from "./HC/Catagorymaun"
import Selectpurchase from "./HC/Selectpurchase"
import useNavContext from "../../Hooks/useNavContext"
import Subscrib from "../Global_Components/Subscrib"

import Exp from "../Global_Components/Exp"
import men_1 from "../../images/men-01.jpg"
import men_2 from "../../images/men-02.jpg"
import men_3 from "../../images/men-03.jpg"

import women_1 from "../../images/women-01.jpg"
import women_2 from "../../images/women-02.jpg"
import women_3 from "../../images/women-03.jpg"

import kid_1 from "../../images/kid-01.jpg"
import kid_2 from "../../images/kid-02.jpg"
import kid_3 from "../../images/kid-03.jpg"

import Cards from "./HC/Cards"
import Footer from "../Global_Components/Footer"

const swipers=[
  {
    title:"Men's Latest",
    details:"Details to details is what makes Hexashop different from the other themes.",
    products:[
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
  },
  {
    title:"Women's Latest",
    details:"Details to details is what makes Hexashop different from the other themes.",
    products:[
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
  },{
    title:"Kid's Latest",
    detils:"Details to details is what makes Hexashop different from the other themes.",
    products:[
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
  }
]

const Catagoryobject=[{
  title:"Women",
  classes:styles.forcatagor1,
  p1:"Best Clothes for Women",
  p2:"Lorem ipsum dolor, sit amet consectetur."
},
{
  title:"Men",
  classes:styles.forcatagor2,
  p1:"Best Clothes for Men",
  p2:"Lorem ipsum dolor, sit amet consectetur."
},
{
  title:"Kids",
  classes:styles.forcatagor3,
  p1:"Best Clothes for Kids",
  p2:"Lorem ipsum dolor, sit amet consectetur."
},
{
  title:"Accessories",
  classes:styles.forcatagor4,
  p1:"Best Trande Accessories",
  p2:"Lorem ipsum dolor, sit amet consectetur."
}]
export default function Home() {
  const {setclickmanu} =useNavContext()
  const clicked =()=>{
    setclickmanu(false)
  }
  return (
    <>
    <div className={styles.home} onClick={clicked}>

     <div className={styles.selector}>
           <div className={styles.slleft}>
                 <Selectpurchase/>
           </div>
           <div className={styles.slright}>
            {Catagoryobject.map((item,i)=>(
                   <Catagorymanu key={i} classes={item.classes} title={item.title} p1={item.p1} p2={item.p2} />
            ))}
           </div>
     </div>


      <div className={styles.cardsveiw}>

        {swipers.map((item,i)=>(
             <Cards key={i}  swiper={item}/>
        )
        )}
      </div>

      <div className={styles.homexpcom}>
          <Exp/>
      </div>
      <div className={styles.suboption}>
             <Subscrib/>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
      
   </>
  )
}
