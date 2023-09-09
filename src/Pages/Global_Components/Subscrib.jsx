import styles from "./GC_Css/Subscrib.module.css"
import Form from "./Form"
import {Link} from "react-router-dom"
const subdata=[
  {
    h:"Store Location: ",
    p:"Sunny Isles Beach, FL 33160, United States"
  },{
    h:"Work Hours:",
    p:"07:30 AM - 9:30 PM Daily"
  }
  ,{
    h:"Phone:",
    p:"010-020-0340"
  }
  ,{
    h:"Email:",
    p:"info@company.com"
  },{
    h:"Office Location:",
    p:"North Miami Beach"
  }
]
export default function Subscrib() {
  return (
    <div className={styles.subscrib}>
        <div className={styles.sendsub}>
            <Form classes={styles.forminput} heading={"By Subscribing To Our Newsletter You Can Get 30% Off"} p={"Details to details is what makes Hexashop different from the other themes."}/>
        </div>
        
        <div className={styles.address}>
           {subdata.map((item,i)=>{
            return <div key={i} className={styles.subdata}> <h2><b>{item.h}</b></h2> <p>{item.p}</p>  </div>
           })}
           <div className={styles.socialmedia}>
            <h2>Social Media: </h2>
            <p><Link to={'/'} className={styles.link}>Facebook,</Link> <Link to={'/'} className={styles.link}> Instagram,</Link> <Link to={'/'} className={styles.link}> Behance,</Link><Link to={'/'} className={styles.link}> Linkedin</Link></p>

           </div>
        </div>
    </div>
  )
}
