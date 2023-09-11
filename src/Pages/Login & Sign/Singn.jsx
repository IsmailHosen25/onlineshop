import styles from './Sign.module.css'
import {Link} from "react-router-dom"
import {useFormik} from "formik"
import * as yup from "yup"
export default function Singn() {
  const formik =useFormik({
    initialValues:{
      username:"",
      emailornumber:"",
      password:"",
      cpassword:""
    },
    validationSchema:yup.object({
      username:yup.string()
              .required("username is required"),
      emailornumber:yup.string()
            .required(" email or Number is required"),
      password:yup.string()
               .required("password is required"),
      cpassword:yup.string()
              .required("confirm password is required")
    }),onSubmit:(values)=>{
      console.log(values)
    }
    
    
  })
  return (
    <div className={styles.ls}>
        <div className={styles.continer}>
              <div className={styles.signup}>
                 <form onSubmit={formik.handleSubmit}>
                     <label className={styles.label}>Sign Up</label>
                      <input  className={styles.input} type="text" name='username' placeholder="User Name" value={formik.values.username} onChange={formik.handleChange}/>
                      <input  className={styles.input} type="text" name='emailornumber' placeholder="User Email/Mobile Number" value={formik.values.email} onChange={formik.handleChange}/>
                      <input  className={styles.input} type="password" name='password' placeholder="Password" value={formik.values.password} onChange={formik.handleChange}/>
                      <input  className={styles.input} type="password" name='cpassword' placeholder="Confirm Password" value={formik.values.cpassword} onChange={formik.handleChange}/>
                      <button  className={styles.btn} type='submit'>Sign Up</button>
                 </form>
                 <p><i>Already member? <Link to={"/login"}>Login</Link> here.</i></p>
               </div>
      </div>
    </div>
  )}
