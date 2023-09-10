import styles from "./GC_Css/Card.module.css"
import useViewContext from "../../Hooks/useViewContext"
import useCartContext from "../../Hooks/useCartContext"
import { useNavigate } from "react-router-dom"
export default function Card({product}) {
   const navigate =useNavigate()
   const {setviewdata}=useViewContext()
   const {cartitem,setcartitem}=useCartContext()
   const handleview=()=>{
         setviewdata([{...product}])
         navigate("/view")
   }
   const handlecart=()=>{
      setcartitem([...cartitem,{...product}])
   }
  return (
    <div className={styles.card}>
       <div className={styles.img}>
           <img src={product.img}/>
           <div className={styles.hover}>

            <div className={styles.icon} onClick={handleview}>
               <i className="fa-solid fa-eye"></i>
            </div>
            <div className={styles.icon}>
            <i className="fa-solid fa-star"></i>
            </div>
            <div className={styles.icon} onClick={handlecart}>
               <i className="fa-solid fa-cart-shopping"></i>
            </div>


           </div>
       </div>
       <div className={styles.detials}>
        <div className={styles.top}>
            <h1><b>{product.title}</b></h1>
            <h2><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> </h2>
        </div>
          
          <p>${product.price}</p>
       </div>
    </div>
  )
}
