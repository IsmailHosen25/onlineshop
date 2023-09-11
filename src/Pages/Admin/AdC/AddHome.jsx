import styles from "./Adccc/AddHome.module.css"
import { useState } from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import Adproductpagee from "./Adproductpagee"
import men_1 from "../../../images/men-03.jpg"
import men_2 from "../../../images/men-02.jpg"
import men_3 from "../../../images/men-03.jpg"


export default function AddHome() {
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

  const formik=useFormik({
    initialValues:{
        img:"",
        title:"",
        price:"",
        code:"",
        option:""
    },validationSchema:yup.object({
      title:yup.string().required("title is Required"),
      price:yup.string().required("price is Required"),
      code:yup.string().required("code is Required")
    })
    ,
    onSubmit:(values)=>{
        console.log(values)
    }
  })



  return (
    <div className={styles.addhome}>

        <h2 className={styles.heading}>
            Home
        </h2>
        <p className={styles.addtage}>Add Products:</p>
        <form onSubmit={formik.handleSubmit} className={styles.addform}>
            <input type='file' name='img' required className={styles.ptg} onChange={formik.handleChange}/>
            <div className={styles.ptg}>
              <input type='text' name='title' placeholder='Title' value={formik.values.title} onChange={formik.handleChange}/>
              <label><i>{formik.errors.title}</i></label>
            </div>
           <div className={styles.ptg}>
             <input type='number' name='price' placeholder='Price' value={formik.values.price} onChange={formik.handleChange}/>
             <label><i>{formik.errors.price}</i></label>
            </div>
            <div className={styles.ptg}>
              <input type='text' name='code' placeholder='code' value={formik.values.code} onChange={formik.handleChange}/>
               <label><i>{formik.errors.code}</i></label>
            </div>
            <div  className={styles.ptg}>
                    <select name="option" onChange={formik.handleChange} className={styles.select}>
                        <option selected>Men's</option>
                        <option>Women's</option>
                        <option>Kid's</option>
                    </select>
            </div>
            <div className={styles.ptgbtn}>
                 <button  type='submit' className={styles.btnc}> + Add</button>
            </div>
           </form>

      <div>
        <Adproductpagee h={"Men's"} products={products} setp={setproducts} formadd={false}/>
        <Adproductpagee h={"women's"} products={products} setp={setproducts}/>
        <Adproductpagee h={"kid's"} products={products} setp={setproducts}/>
      </div>

    </div>
  )
}