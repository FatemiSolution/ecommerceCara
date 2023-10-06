
import './App.css'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sproduct from './components/Sproduct'
import { useState } from 'react';

function App() {
  const [imgUrl, setimgUrl] = useState([]);
  const getImg=(a)=>{
    setimgUrl(a);
  }
  console.log(imgUrl)
  // const imageUrl = [{imgUrl}, 'images/products/f3.jpg','images/products/f4.jpg','images/products/f1.jpg'];
  // let a = Object.values(imgUrl)
  // console.log(a)
  
  return (
    <>
        <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="shop" element={<Shop getImg={getImg}/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="about" element={< About/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sProduct" element={<Sproduct imageUrl={imgUrl}  />} />
        
      </Routes>
      <Newsletter/>
      <Footer/>
    </Router>

    
    </>
  )
}

export default App
