import styles from './GC_Css/Footerlinkes.module.css'
import {Link} from "react-router-dom"
export default function Footerlinkes({h,p1,p1link,p2,p2link,p3,p3link,p4,p4link}) {
  return (
    <div className={styles.footerlink}>
       
       <h1 className={styles.h}>{h}</h1>

       <div className={styles.links}>
        <Link to={p1link} className={styles.link}>{p1}</Link>
        <Link to={p2link} className={styles.link}>{p2}</Link>
        <Link to={p3link} className={styles.link}>{p3}</Link>
        <Link to={p4link} className={styles.link}>{p4}</Link>
       </div>
        
    </div>
  )
}
