import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFind from './pages/NotFind'
import Layout from './component/Layout'
import Product from './pages/Product'
import Cart from './pages/Cart'
import ShopContext from './context/ShopContext'

function App() {

  return (
    <ShopContext>
    <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/*' element={<NotFind />} />
    </Routes>
      </Layout>
      </ShopContext>
    
  )
}

export default App
