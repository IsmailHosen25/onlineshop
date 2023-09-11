import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "./Pages/Global_Components/Nav"
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import Explor from './Pages/ExplorPage/Explor'
import NavProvider from './Context/NavContext'
import Contect from './Pages/ContectPage/Contect'
import Men from './Pages/MenPage/Men'
import Women from './Pages/WomenPage/Women'
import Kid from "./Pages/KidPage/Kid"
import ViewContextProvider from "./Context/ViewContext"
import View from './Pages/ViewPage/View'
import Cart from './Pages/Cart/Cart'
import CartProvider from './Context/CartContext'
import Carticon from './Pages/Global_Components/Carticon'
import Admin from './Pages/Admin/Admin'
import Singn from './Pages/Login & Sign/Singn'
import Login from './Pages/Login & Sign/Login'
function App() {

  return (
    <>
  <NavProvider>
    <CartProvider>
     <ViewContextProvider>
      <Nav/>
    <Carticon/>
     <Routes>
       <Route path="/onlineshop" element={<Home/>}/>
       <Route path='/men' element={<Men/>}/>
       <Route path='/women' element={<Women/>}/>
       <Route path='/kid' element={<Kid/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contect' element={<Contect/>}/>
       <Route path='/explore' element={<Explor/>}/>
       <Route path='/view' element={<View/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/sign' element={<Singn/>}/>
       <Route path="/admin" element={<Admin/>}/>
      </Routes>
      </ViewContextProvider>
     </CartProvider>
    </NavProvider>
    </>
  )
}

export default App
