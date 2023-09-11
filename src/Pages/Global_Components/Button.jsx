import styles from "./GC_Css/Button.module.css"
import {useNavigate} from "react-router-dom"
export default function Button({children, mode,title}) {
     const navigate =useNavigate()
    const buttonclicked=()=>{
      console.log(title)
      if(title==="Men"){
        navigate("/men")
        return
      }
      if(title==="Women"){
        navigate("/women")
        return
      }
      if(title==="Kids"){
        navigate("/kid")
        return
      }
      if(title==="Accessories"){
        navigate("/")
        return
      }
      
    }
  return (
    <button onClick={buttonclicked} className={`${mode ?  `${styles.button}`:`${styles.button2}`}`}><b>{children}</b></button>
  )
}
