import styles from "./GC_Css/Card.module.css"
export default function Card({img,title,price}) {
  return (
    <div className={styles.card}>
       <div className={styles.img}>
           <img src={img}/>
           <div className={styles.hover}>

            <div className={styles.icon}>
               <i className="fa-solid fa-eye"></i>
            </div>
            <div className={styles.icon}>
            <i className="fa-solid fa-star"></i>
            </div>
            <div className={styles.icon}>
               <i className="fa-solid fa-cart-shopping"></i>
            </div>


           </div>
       </div>
       <div className={styles.detials}>
        <div className={styles.top}>
            <h1><b>{title}</b></h1>
            <h2><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> </h2>
        </div>
          
          <p>{price}</p>
       </div>
    </div>
  )
}
