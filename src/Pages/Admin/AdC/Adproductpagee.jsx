import { useEffect, useState } from 'react'
import styles from './Adccc/Adproductpagee.module.css'
import {useFormik} from "formik"
import * as yup from "yup"
import Edittodo from './Edittodo'
export default function Adproductpagee({h,products,setp,formadd}) {

  const [edit,setedit]=useState(false)
  const [product,setproduct]=useState([])
  useEffect(()=>{
    setproduct(products)
  },[products])
  const formik=useFormik({
    initialValues:{
        img:"",
        title:"",
        price: null,
        code:""
    },
    validationSchema:yup.object({
      title:yup.string().required("Title is required"),
      price:yup.number().required("Price is required"),
      code:yup.string().required("Code is required")
    }),onSubmit:(values)=>{
      console.log(values)
    }
  })



  return (
    <div className={styles.addproductpage}>
         <h1 className={styles.heading}>{h} ({products.length} Products )</h1>
         <div className={styles.addproducts}>
           <div className={styles.productstag}>
             <p className={styles.ptg}>Image</p>
             <p className={styles.ptg}>Title</p>
             <p className={styles.ptg}>Price</p>
             <p className={styles.ptg}>Code</p>
             <p className={styles.ptg}>Eidt</p>
             <p className={styles.ptg}>Delete</p>
           </div>
           {formadd ? <div className={styles.toform}> <p className={styles.addtage}>Add Products:</p>
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

            <div className={styles.ptgbtn}>
                 <button  type='submit' className={styles.btnc}> + Add</button>
            </div>
           </form></div> : "" }
           {product.map((item,i)=> <div key={i} className={styles.addproduct}>
              <div className={styles.ptg}>
                <img  src={item.img}/>
              </div>

               <p className={styles.ptg}>{item.title}</p>
               <p className={styles.ptg}>${item.price}</p>
               <p className={styles.ptg}>{item.code}</p>
               <div className={styles.ptg}>
                 <button className={styles.btn} onClick={()=> setedit(true)}><i className="fa-regular fa-pen-to-square"></i></button>
               </div>
               <div className={styles.ptg}>
                 <button className={styles.btn} onClick={()=> {
                     const fliterproduct=products.filter((item,index)=>{return index!=i} )
                     setproduct(fliterproduct)
                 }}><i className="fa-solid fa-trash"></i></button>
               </div>

           </div>)}
         </div>

    </div>
  )
}
