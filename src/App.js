import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword'
import Signup from './pages/Signup'
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='blog/:id' element={<SingleBlog/>}/>
          <Route path='compare' element={<CompareProduct/>}/>
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="login" element={<Login/>} />
          <Route path="forgot" element={<Forgotpassword/>} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='reset' element={<Resetpassword/>}/>
          <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='shipping-policy' element={<ShippingPolicy/>}/>
          <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
          <Route path='refund-policy' element={<RefundPolicy/>}/>
          <Route path='store/product/:id' element={<Product/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
