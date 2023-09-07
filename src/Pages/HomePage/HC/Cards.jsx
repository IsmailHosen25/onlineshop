import styles from "./HC_Css/Cards.module.css"
import Card from "../../Global_Components/Card"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Cards({title,detils,products}) {
  return (
    <div className={styles.div}>
    <div className={styles.cardsdetiles}>
       <h1>{title}</h1>
       <p><i>{detils}</i></p>
    </div>
  <Swiper 
      className={styles.swiper}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      breakpoints={{
        0: {
          slidesPerView:1,
          spaceBetween:10
        },
        650:{
          slidesPerView:2,
          spaceBetween:50
        },
        1100:{
          slidesPerView:3,
          spaceBetween:30
        }
      }}
    >
    {products.map((item,i)=>(

    <SwiperSlide key={i} className={styles.card} >
             <Card  img={item.img} title={item.title} price={item.price}/>
    </SwiperSlide>
  ))}
 </Swiper>
 </div>
  )
}
