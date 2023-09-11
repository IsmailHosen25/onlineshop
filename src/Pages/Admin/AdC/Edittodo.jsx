import styles from './Adccc/Edittodo.module.css'
import {useFormik} from "formik"
import * as yup from "yup"
export default function Edittodo({optionadd=false}) {

    const formik=useFormik({
        initialValues:{
            img:"",
            title:"",
            price:"",
            code:"",
            option:""
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

            {optionadd?  <div  className={styles.ptg}>
                    <select name="option" onChange={formik.handleChange} className={styles.select}>
                        <option selected>Men's</option>
                        <option>Women's</option>
                        <option>Kid's</option>
                    </select>
            </div>: ""}
 
            <div className={styles.ptgbtn}>
                 <button  type='submit' className={styles.btnc}> Updated</button>
            </div>
            <div className={styles.ptgbtn}>
                 <button  type='submit' className={styles.btnc}> <i class="fa-solid fa-xmark"></i></button>
            </div>
           </form>
  )
}
