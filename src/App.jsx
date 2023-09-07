import './App.css'
import Home from './Pages/HomePage/Home'
import Nav from "./Pages/Global_Components/Nav"
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
