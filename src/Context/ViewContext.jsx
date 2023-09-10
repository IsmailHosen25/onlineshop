import React, { useState, createContext} from "react"
export const ViewContext=createContext({})


const ViewContextProvider=({children})=>{
const [viewdata ,setviewdata]=useState([])
    return (
         
        <ViewContext.Provider value={{viewdata,setviewdata}}>
            {children}
        </ViewContext.Provider>

    )
}
export default ViewContextProvider
