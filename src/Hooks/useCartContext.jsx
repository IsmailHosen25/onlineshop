import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const useCartContext=()=>{
   return useContext(CartContext)
}
export default useCartContext