import { useEffect, useState } from "react"
import styles from "./GC_Css/Nav.module.css"
import logo from "../../images/logo.png"
import { Link,useNavigate} from "react-router-dom"
export default function Nav() {
    const [clickmanu, setclickmanu] = useState(false)
    const navigate =useNavigate()
    const clickedlogo=()=>{
        navigate("/")
    }

    const clickedmanu=()=>{
           if(clickmanu==false){
            setclickmanu(true)
           }
           else{
            setclickmanu(false)
           }
    }
  return (
    <div className={styles.nav}>
        <div className={styles.innerdiv}>
          <div className={styles.logo}>
             <img src={logo}n onClick={clickedlogo}/>
          </div>
          <div className={`${clickmanu ? `${styles.manuclicked}`:`${styles.manu}`} `}>
            <li>
                <Link className={styles.link} to={"/"} >Home</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/"} >Men's</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/"} >Women's</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/"} >Kid's</Link>
            </li>
            <li className={styles.pagein}>
                <div><Link className={styles.link}>Pages <i className="fa-solid fa-angle-down"></i></Link></div>
                <div className={`${clickmanu ? `${styles.lpagesclicked}`:`${styles.lpages}`} `}>
                    <li className={styles.li}>
                        <Link to={"/"} className={styles.inlink}>Products</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to={"/"} className={styles.inlink}>About Us</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to={"/"} className={styles.inlink}>Countect Us</Link>
                    </li>
                </div>
            </li>
            <li>
                <Link className={styles.link} to={"/"} >Explore</Link>
            </li>
          </div>
          <div className={styles.togglemanu} onClick={clickedmanu}>
                <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
    </div>
  )
}
