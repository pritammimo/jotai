import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import ProductPage from './Components/ProductDescription';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App