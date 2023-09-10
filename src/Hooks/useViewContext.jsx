import { useContext } from "react"
import {ViewContext} from "../Context/ViewContext"

const useViewContext =()=>{
    return useContext(ViewContext)
}
export default useViewContext