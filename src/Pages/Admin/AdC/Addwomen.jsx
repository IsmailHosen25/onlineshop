import { useState } from 'react'
import Adproductpagee from "./Adproductpagee"
import men_1 from "../../../images/men-03.jpg"
import men_2 from "../../../images/men-02.jpg"
import men_3 from "../../../images/men-03.jpg"


export default function Addwomen() {
  const [products,setproducts]=useState([
    {
      img:men_1,
      title:"Love Nana'20",
      code:"5ughdhbf3",
      price:150.00,
      quntity:1
    },
    {
      img:men_2,
      title:"Classic Spring",
      code:"5ughdhbf3",
      price:120.00,
      quntity:1
    },{
      img:men_3,
      title:"Classic Spring",
      code:"5ughdhbf3",
      price:120.00,
      quntity:1
    },  {
      img:men_1,
      title:"Love Nana'20",
      code:"5ughdhbf3",
      price:150.00,
      quntity:1
    },
    {
      img:men_2,
      title:"Classic Spring",
      code:"5ughdhbf3",
      price:120.00,
      quntity:1
    },{
      img:men_3,
      title:"Classic Spring",
      code:"5ughdhbf3",
      price:120.00,
      quntity:1
    }
  ])
  return (
    <div>
        
        <Adproductpagee h={"Women's"} products={products} setp={setproducts} formadd={true}/>


    </div>
  )
}