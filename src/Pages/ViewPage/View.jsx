import styles from './View.module.css'
import useViewContext from "../../Hooks/useViewContext"
import useCartContext from '../../Hooks/useCartContext'
export default function View() {
  const {viewdata,setviewdata}=useViewContext()
  const {cartitem,setcartitem}=useCartContext()
  const handlecart=()=>{
    setcartitem([...cartitem,{...viewdata[0]}])
 }
  return (
    <div className={styles.viewdata}>
     
     <div className={styles.data}>
        {viewdata.map((item)=> <> 
        <div className={styles.img}> <img src={item.img}/></div>
        <div className={styles.detalis}>
           <h2>{item.title}</h2>
           <p>${item.price}</p>
           <button className={styles.btn} onClick={handlecart}>Add to cart</button>
           </div>
           </>)}
       </div>

    </div>
  )
}
