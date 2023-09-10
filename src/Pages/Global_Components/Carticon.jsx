import styles from './GC_Css/Carticon.module.css'
import { useNavigate } from 'react-router-dom'
import useCarContext from '../../Hooks/useCartContext'
import { useEffect } from 'react'

export default function Carticon() {
    const navigate =useNavigate()
    const {cartitem}=useCarContext()
    const handlecart=()=>{
           navigate("/cart")
    }
    useEffect(()=>{
           
    },[cartitem])
  return (
    <div className={styles.carticon} onClick={handlecart}>
        <i class="fa-solid fa-cart-shopping"></i>
        <div className={styles.countitem}>
            {cartitem.length}
        </div>
    </div>
  )
}
