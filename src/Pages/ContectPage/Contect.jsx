import styles from './Contect.module.css'
import Pagebanar from "../Global_Components/Pagebanar"
import Form from "../Global_Components/Form"
import Footer from "../Global_Components/Footer"
import Subscrib from "../Global_Components/Subscrib"

export default function Contect() {
  return (
    <div className={styles.contect}>
        <div className={styles.bannar}>
        <Pagebanar classes={styles.pagebannar} h1={"Contact Us"} p={"Awesome, clean & creative HTML5 Template"}/>
        </div>
        <div className={styles.contectform}>

          <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" title="map"></iframe>
          </div>
          <div className={styles.form}>
                 <Form textarea={true} classes={styles.dataform} heading={"Say Hello. Don't Be Shy!"} p={"Details to details is what makes Hexashop different from the other themes."}/>
          </div>

        </div>
        <div className={styles.suboption}>
          <Subscrib/>
        </div>
        <div className={styles.footer}>

          <Footer/>
          
        </div>
    </div>
  )
}
