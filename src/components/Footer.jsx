import React from 'react'

function Footer() {
  return (
    <>
    <footer className="">
        <div className="col">
            <img className="logo" src="images/logo.png" alt="img cant be loaded" title="cara"/>
            <h4>Contacts</h4>
            <p><strong>Address:</strong> 562 Wellington Road, Street 32 Sans Franscisco</p>
            <p><strong>Phone:</strong> +01 2222 315 /(92) 3111527253</p>
            <p><strong>Hours:</strong> 10.00 - 18.00 / mon - sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-tiktok"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From Appstore or Google Play</p>
            <div className="row">
                <img src="images/pay/app.jpg" alt=""/>
                <img src="images/pay/play.jpg" alt=""/>
            </div>
            <p>Secure Payment getway</p>
            <img src="images/pay/pay.png" alt=""/>
        </div>
        <div className="copyright">
            <p>0 2023, FatemiSolutions - HTML CSS E-commerce Template</p>
        </div>
    </footer>
    </>
  )
}

export default Footer