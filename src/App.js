import React from 'react';


import LoginForm from './component/login/Ligin';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './component/login/Singup';
import Product from './component/product/Product';
import Navbar from './component/Navbar';
import Addtocard from './component/Addtocard';
import Footer from './component/footer/Footer';
import Bynow from './component/product/Bynow';


function App() {
  return (
    <>
    <div className=''>
      <Navbar/>
      </div>
          <Routes>
          <Route path="/" element={<Product/>}/>
            <Route path="/signup" element={<SignupForm />}/>
            <Route path="/login" element={<LoginForm/>}/>
           
            <Route path="/addcard" element={<Addtocard/>}/>
            <Route path="/products/:id" element={<Bynow/>}/>
            

          </Routes>
     <Footer/>
    </>
  );
}

export default App;

