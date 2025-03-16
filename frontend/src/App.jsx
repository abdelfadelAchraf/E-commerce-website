import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading ';
import MyProfile from './pages/MyProfile';
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ;
const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative">
      <ToastContainer/>
      <Navbar />
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      <Route path='/my-profile' element ={<MyProfile/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
