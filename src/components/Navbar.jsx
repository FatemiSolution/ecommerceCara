import React from 'react'
import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
    <section className="header">
        <Link to="#"> <img src="images/logo.png" className="logo" alt=""/></Link>
        <div className="navbar">
            <ul className="nav-list" id="navlist">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart" id="lg-bag"><i className="fa-solid fa-bag-shopping"></i></Link></li>
                <Link to="#" id="close"><i className="fa-regular fa-rectangle-xmark"></i></Link>
            </ul>
        </div>
        <div className="mobile">
            
            <Link to="Cart.html"><i className="fa-solid fa-bag-shopping" ></i></Link>
            <i id="bar" className="fa-solid fa-bars"></i>
        </div>
    </section>
    </>
  )
}

export default navbar