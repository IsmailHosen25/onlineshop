import {useState } from "react"
import styles from "./GC_Css/Nav.module.css"
import logo from "../../images/logo.png"
import { Link,useNavigate} from "react-router-dom"
import useNavContext from "../../Hooks/useNavContext"
export default function Nav() {
    const {clickmanu,setclickmanu}=useNavContext()
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
                <Link className={styles.link} to={"/"} onClick={clickedmanu} >Home</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/"} onClick={clickedmanu} >Men's</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/"} onClick={clickedmanu}>Women's</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/"} onClick={clickedmanu} >Kid's</Link>
            </li>
            <li className={styles.pagein}>
                <div><p className={styles.link}>Pages <i className="fa-solid fa-angle-down"></i></p></div>
                <div className={`${clickmanu ? `${styles.lpagesclicked}`:`${styles.lpages}`} `}>
                    <li className={styles.li}>
                        <Link to={"/"} className={styles.inlink} onClick={clickedmanu}>Products</Link>
                    </li>
                    <li className={styles.li }>
                        <Link to={"/"} className={styles.inlink}  onClick={clickedmanu}>About Us</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to={"/"} className={styles.inlink} onClick={clickedmanu}>Countect Us</Link>
                    </li>
                </div>
            </li>
            <li>
                <Link className={styles.link} to={"/explore"} onClick={clickedmanu} >Explore</Link>
            </li>
          </div>
          <div className={styles.togglemanu} onClick={clickedmanu}>
            {clickmanu ? <i class="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars-staggered"></i>}
          </div>
        </div>
    </div>
  )
}
