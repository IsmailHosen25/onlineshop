import  useNavHandleContext  from '../Context and Hook/useNavHandleContext'
import styles from './Adccc/AdNav.module.css'
import {Link} from "react-router-dom"
export default function AdNav() {
  const {setnavupdate }=useNavHandleContext()
  return (
    <div className={styles.addnav}>
     <div className={styles.navmanu}>
         <Link className={styles.link} onClick={()=> setnavupdate({show:"addproduct"})} >My Order</Link>
         <Link className={styles.link}  onClick={()=> setnavupdate({show:"home"})}>Home</Link>
         <Link className={styles.link}  onClick={()=> setnavupdate({show:"men"})}>Men's</Link>
         <Link className={styles.link}  onClick={()=> setnavupdate({show:"women"})}>Women's</Link>
         <Link className={styles.link}  onClick={()=> setnavupdate({show:"kid"})}>Kid's</Link>
         <Link className={styles.link}  onClick={()=> setnavupdate({show:"user"})}>User</Link>
         <Link className={styles.linkmail} onClick={()=> setnavupdate({show:"message"})}><i class="fa-solid fa-envelope"></i></Link>
     </div>
    </div>
  )
}
