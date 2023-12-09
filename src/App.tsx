
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import NoPage from './pages/NoPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import CustomerPage from './pages/CustomerPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='miniproject/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/customer' element={<CustomerPage/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App