import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
function navbar() {
  const [active, setactive] = useState('unactive');
 const barlistner = ()=> {
document.getElementById('navlist').classList.add('active');
document.getElementById('cart').hidden = true;
  };
  const closeListner = ()=> {
  document.getElementById('navlist').classList.remove('active');
  };

  return (
    <>
    <section className="header">
        <Link to="#"> <img src="images/logo.png" className="logo" alt=""/></Link>
        <div className="navbar">
            <ul className="nav-list" id="navlist">
                <li><NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" }  to="/">Home</NavLink></li>
                <li><NavLink to="/shop" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >Shop</NavLink></li>
                <li><NavLink to="/blog"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Blog</NavLink></li>
                <li><NavLink to="/about"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive, isPending }) => 
   isPending ? "pending" : isActive ? "active" : ""}>Contact</NavLink></li>
                <li><NavLink to="/cart" id='cart' hidden={false}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}><i className="fa-solid fa-bag-shopping"></i></NavLink></li>
                <Link to="#" id="close" onClick={closeListner} ><i className="fa-regular fa-rectangle-xmark"></i></Link>
            </ul>
        </div>
        <div className="mobile">
            
            <Link to="/cart" ><i className="fa-solid fa-bag-shopping" ></i></Link>
            <i id="bar" className="fa-solid fa-bars" onClick={barlistner}></i>
        </div>
    </section>
    </>
  )
}

export default navbar