import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLay from './Layout/MainLayout/mainlay'
import Add from './Pages/Add/add'
import Home from './Pages/Home/home'
import Wishlist from './Pages/Wishlist/wishlist'
import Basket from './Pages/Basket/basket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLay/>}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/basket' element={<Basket/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
