import {Link} from "react-router-dom"
import styles from "./GC_Css/Footer.module.css"
import Footerlinkes from "./Footerlinkes"
import logo from "../../images/logo.png"
export default function Footer() {
    const footerlink=[{
        h:"Shoping & Categories",
        p1:"Men's shopping",
        p1link:"/",
        p2:"Women's shopping",
        p2link:"/",
        p3:"Kid's shopping",
        p3link:"/",
        p4:"",
        p4link:""
    },
    {
        h:"Useful Linkes",
        p1:"Home Page",
        p1link:"/",
        p2:"About Us",
        p2link:"/about",
        p3:"Help",
        p3link:"/help",
        p4:"Contect Us",
        p4link:"/contect"
    },{
    
        h:"Help & Information",
        p1:"Help",
        p1link:"/",
        p2:"FAQ's",
        p2link:"/",
        p3:"Shipping",
        p3link:"/",
        p4:"Tracking ID",
        p4link:"/"
    
    }
    ]
  return (
    <div className={styles.footer}>
       <div className={styles.footerup}>

        <div className={styles.addres}>
           <img src={logo}/>
           <p>
            16501 Collins Ave, Sunny lsles Beach, FL 33160, United States
           </p>
           <p>
             ismailhosen1006.gmail.com
           </p>
           <p>
            010-020-0340
           </p>
        </div>
        <div className={styles.pagelink}>
        {footerlink.map((item,i)=>(
            <Footerlinkes key={i} h={item.h} p1={item.p1} p1link={item.p1link} p2={item.p2} p2link={item.p2link} p3={item.p3} p3link={item.p3link} p4={item.p4} p4link={item.p4link} />
          ))}
        </div>
       </div>
       <div className={styles.footerbottom}> 

       <div className={styles.designerdetails}>
        <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved</p>
        <p>Design: <Link className={styles.designerlink} to={"https://ismailhosen25.github.io/My-web-site/?fbclid=IwAR1IDbDemXBPzimxtYomGNWqSSTsR-m0Z2qheBf12iSOUTlbp2FA8acrMWI"} target="_blank">MD. Ismil Hosen</Link></p>
       </div >

        <div className={styles.icon}>

           <Link className={styles.link} to={"https://www.facebook.com/profile.php?id=100075446262873&sk=about"} target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
           <Link className={styles.link}  to={'/'}><i className="fa-brands fa-linkedin-in"></i></Link>
        
        </div>
             
       </div>
    </div>
  )
}
