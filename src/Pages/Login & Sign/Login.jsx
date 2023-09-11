import styles from './Login.module.css'
import {Link} from "react-router-dom"
import {useFormik} from "formik"
import * as yup from "yup"

export default function Login() {
  const formik =useFormik({
    initialValues:{
      emailornumber:"",
      password:""
    },
    validationSchema:yup.object({
      emailornumber:yup.string()
              .required(" email or Number is required"),
      password:yup.string()
             .required("password is required")
    }),onSubmit:(values)=>{
      console.log(values)
    }
    
    
  })
  return (
    <div className={styles.ls}>
        <div className={styles.continer}>
              <div className={styles.login}>
                 <form onSubmit={formik.handleSubmit}>
                     <label className={styles.label}>Login</label>
                      <input className={styles.input} type="text" name='emailornumber' placeholder="User Email / Number" value={formik.values.emailornumber} onChange={formik.handleChange}/>
                      <input className={styles.input} type="password" name='password' placeholder="password" value={formik.values.password} onChange={formik.handleChange}/>
                      <button className={styles.btn} type='submit'>Login</button>
                 </form>
                 <p><i>New Member <Link to="/sign">Register</Link> here</i></p>
               </div>
      </div>
    </div>
  )}
