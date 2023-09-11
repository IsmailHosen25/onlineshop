import styles from "./Adccc/Adminpage.module.css"
import AdMen from './AdMen'
import AdNav from './AdNav'
import useNavHandleContext from '../Context and Hook/useNavHandleContext'
import Addwomen from "./Addwomen"
import Addkid from "./Addkid"
import AddHome from "./AddHome"
export default function Adminpage() {
    const {navupdate,setnavupdate }=useNavHandleContext()
  return (
    <>
        <div className={styles.adminpage}>
        <AdNav/> 
        <div className={styles.pages}>
           {navupdate.show=='men'? <AdMen/>:""}
           {navupdate.show=='women'? <Addwomen/>:""}
           {navupdate.show=='kid'? <Addkid/>:""}
           {navupdate.show=="home"? <AddHome/>:""}
        </div>

        </div>
    </>
  )
}
