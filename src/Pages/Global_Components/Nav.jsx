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
           setclickmanu(false)
    }
    const clickedmanufromvar=()=>{
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
                <Link className={styles.link} to={"/onlineshop"} onClick={clickedmanu} >Home</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/men"} onClick={clickedmanu} >Men's</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/women"} onClick={clickedmanu}>Women's</Link>
            </li>

            <li>
                <Link className={styles.link} to={"/kid"} onClick={clickedmanu} >Kid's</Link>
            </li>
            <li className={styles.pagein}>
                <div><p className={styles.link}>Pages <i className="fa-solid fa-angle-down"></i></p></div>
                <div className={`${clickmanu ? `${styles.lpagesclicked}`:`${styles.lpages}`} `}>
                    <li className={styles.li}>
                        <Link to={"/onlineshop"} className={styles.inlink} onClick={clickedmanu}>Products</Link>
                    </li>
                    <li className={styles.li }>
                        <Link to={"/about"} className={styles.inlink}  onClick={clickedmanu}>About Us</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to={"/contect"} className={styles.inlink} onClick={clickedmanu}>Countect Us</Link>
                    </li>
                </div>
            </li>
            <li>
                <Link className={styles.link} to={"/explore"} onClick={clickedmanu} >Explore</Link>
            </li>
            <li>
                <Link className={styles.link} to={"/login"} onClick={clickedmanu} >Login</Link>
            </li>
          </div>
          <div className={styles.togglemanu} onClick={clickedmanufromvar}>
            {clickmanu ? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars-staggered"></i>}
          </div>
        </div>
    </div>
  )
}
