import styles from './GC_Css/Productspage.module.css'
import Card from './Card'


export default function Productspage({title,products}) {

  return (
    <div className={styles.productspage}>
        <div className={styles.title}>

            <h1><b>{title}</b></h1>
            <p><i>Check out all of our products</i></p>

        </div>
        <div className={styles.products}>
            {products.map((item,i)=>(
                <div key={i} className={styles.product}>
                    <Card product={item}/>
                </div>
            ))}
        </div>
    </div>
  )
}
