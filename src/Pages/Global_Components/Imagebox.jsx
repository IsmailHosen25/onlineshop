import styles from "./GC_Css/Imagebox.module.css"
export default function Imagebox({img}) {
  return (
    <div className={styles.imgbox}>
        <img src={img}/>
    </div>
  )
}
