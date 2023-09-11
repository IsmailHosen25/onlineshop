import React,{useState, createContext} from "react";
export const NavHandleContext=createContext({})


const AdNavProvider=({children})=>{
   
    const [navupdate, setnavupdate]=useState({show:"addproduct"})

    return <NavHandleContext.Provider value={{navupdate,setnavupdate}}>{children}</NavHandleContext.Provider>
}
export default AdNavProvider