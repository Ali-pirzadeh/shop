import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFind from './pages/NotFind'
import Layout from './component/Layout'
import Product from './pages/Product'

function App() {

  return (
 
    <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/*' element={<NotFind />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
    </Layout>
    
  )
}

export default App
