import styles from "./GC_Css/Form.module.css"
import { useFormik } from "formik"
import * as yup from "yup"
export default function Form({textarea,classes}) {


     const formik =useFormik({
      initialValues:{
        name:"",
        email:"",
        text:""
      },validationSchema:yup.object({
             name:yup.string()
                     .required("Name is required"),
             email:yup.string()
                      .required("Email required"),
             text:yup.string()
                     .max(500,"Text must be within 100 word")
      }),
      onSubmit:(values)=>{
        alert("submitted successfully")
      }
     })

const h=()=>{
  return (
    <>
    <textarea name="text" onChange={formik.handleChange}>
    {formik.values.text}
    </textarea>
    <label><i>{formik.errors.text}</i></label>

    </>
  )
}

  return (
    <div className={classes}>
            <div className={styles.formheading}>
                <h1><b>By Subscribing To Our Newsletter You Can Get 30% Off</b></h1>
                <p><i>Details to details is what makes Hexashop different from the other themes.</i></p>
            </div>
            <div className={styles.formdiv}> 
              <form onSubmit={formik.handleSubmit} className={styles.forminput}>

                <div className={styles.input}>

                  <div className={styles.inname}>
                   <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Your Name"/>
                    <label><i>{formik.errors.name}</i></label>
                  </div>

                <div className={styles.inemail}>
                  <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Email"/>
                  <label><i>{formik.errors.email}</i></label>
                </div>

                </div>
                {textarea &&  h()}
                <button type="submit" className={styles.btn}><i class="fa-solid fa-paper-plane"></i></button>
              </form>

            </div>
        </div>
  )
}
