import styles from "./HC_Css/Catagorymanu.module.css"
import Button from "../../Global_Components/Button"
export default function Catagorymaun({classes,title,p1,p2}) {
  return (
    <div className={` ${styles.Catagorymaun} ${classes} `}>
      <div className={styles.catdetials}>
        <h2>{title}</h2>
        <p><i>{p1}</i></p>
      </div> 
      <div className={styles.hover}>
          <h2>{title}</h2>
          <p>{p2}</p>
          <Button mode={true} title={title} >Descover More</Button>
      </div>
    </div>
  )
}
