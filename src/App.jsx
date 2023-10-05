
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

function App() {
  const imageUrl = ['images/products/f2.jpg', 'images/products/f3.jpg','images/products/f4.jpg','images/products/f1.jpg'];
  return (
    <>
        <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog/>} />
          <Route path="about" element={< About/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sProduct" element={<Sproduct imageUrl={imageUrl} setImg1={'images/products/f2.jpg'}setImg2={'images/products/f2.jpg'}setImg3={'images/products/f2.jpg'} />} />
        
      </Routes>
      <Newsletter/>
      <Footer/>
    </Router>

     {/* <Navbar/>
     <Home />
     <Shop/>
     <Blog />
     <About />
     <Contact/>
     <Newsletter />
<Footer /> */}
    </>
  )
}

export default App
