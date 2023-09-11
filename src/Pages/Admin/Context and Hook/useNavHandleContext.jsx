import { useContext } from "react";
import  {NavHandleContext}  from "./NavHandleContext";

const useNavHandleContext=()=>{
    return useContext(NavHandleContext)
}
export default useNavHandleContext