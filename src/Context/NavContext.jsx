import React,{ useState,createContext } from "react";

export const NavContext=createContext({})


const NavProvider=({children})=>{
    const [clickmanu, setclickmanu] = useState(false)

    return <NavContext.Provider value={{clickmanu,setclickmanu}}>
             {children}
    </NavContext.Provider>
}
export default NavProvider;