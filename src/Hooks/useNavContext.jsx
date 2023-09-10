import{useContext} from "react";
import {NavContext} from "../Context/NavContext"
const useNavContext=()=>{
    return useContext(NavContext)
}
export default useNavContext
