import styles from "./GC_Css/Button.module.css"
export default function Button({children, mode,title}) {
    const buttonclicked=()=>{
      console.log(title)
    }
  return (
    <button onClick={buttonclicked} className={`${mode ?  `${styles.button}`:`${styles.button2}`}`}><b>{children}</b></button>
  )
}
