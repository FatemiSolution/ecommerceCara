import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
function navbar() {
  let home = document.getElementById('homeBtn');
  let shop = document.getElementById('shopBtn');
  let blog = document.getElementById('blogBtn');
  let about = document.getElementById('aboutBtn');
  let contact = document.getElementById('contactBtn');
  let cart = document.getElementById('lg-bag');
  const removeActive = ()=>{
    home.classList.remove('active');
    blog.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    cart.classList.remove('active'); 
    shop.classList.remove('active');
  }
  const [active, setactive] = useState('unactive');
 const barlistner = ()=> {
document.getElementById('navlist').classList.add('active');
  };
  const closeListner = ()=> {
  document.getElementById('navlist').classList.remove('active');
  };
  const shopNav = (e)=> {

    // e.preventDefault();
    
   setactive('active');
   if(home.classList.contains('active')){
    home.classList.remove('active');
   }
    // removeActive();
    // document.getElementById('shopBtn').classList.add('active');
  }
  // const blogNav = ()=> {
  //   removeActive();
  // blog.classList.add('active');
  // }
  // const aboutNav = ()=> {
  //   removeActive();
  // about.classList.add('active');
  // }
  // const contactNav = ()=> {
  //   removeActive();
  // contact.classList.add('active');
  // }
  // const cartNav = ()=> {
  //   removeActive();
  // cart.classList.add('active');
  // }
  // const homeNav = (e)=> {
  //   // e.preventDefault();
  //   removeActive();
  //   home.classList.add('active');
  // }
  return (
    <>
    <section className="header">
        <Link to="#"> <img src="images/logo.png" className="logo" alt=""/></Link>
        <div className="navbar">
            <ul className="nav-list" id="navlist">
                <li><NavLink NavLink activeClassName='active'  to="/">Home</NavLink></li>
                <li><NavLink to="/shop"activeClassName='active' >Shop</NavLink></li>
                <li><NavLink to="/blog" activeClassName='active'>Blog</NavLink></li>
                <li><NavLink to="/about" activeClassName='active'>About</NavLink></li>
                <li><NavLink to="/contact"activeClassName='active'>Contact</NavLink></li>
                <li><NavLink to="/cart" activeClassName='active'><i className="fa-solid fa-bag-shopping"></i></NavLink></li>
                <Link to="#" id="close" onClick={closeListner} ><i className="fa-regular fa-rectangle-xmark"></i></Link>
            </ul>
        </div>
        <div className="mobile">
            
            <Link to="Cart.html"><i className="fa-solid fa-bag-shopping" ></i></Link>
            <i id="bar" className="fa-solid fa-bars" onClick={barlistner}></i>
        </div>
    </section>
    </>
  )
}

export default navbar