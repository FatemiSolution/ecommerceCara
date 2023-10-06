import React from 'react'
import { useState } from 'react';
function Sproduct(props) {
    const { imageUrl } = props;
    console.log(imageUrl)
    const [imageSrc, setImageSrc] = useState(imageUrl[0]);
    
    const handleClick = () => {
        // Change the image source when clicked
        setImageSrc(imageUrl[0]);
        console.log(imageUrl[0]);
      };
    const handleClick1 = () => {
        // Change the image source when clicked
        setImageSrc(imageUrl[1]);
        console.log(imageUrl[1]);
      };
    const handleClick2 = () => {
        // Change the image source when clicked
        setImageSrc(imageUrl[2]);
        console.log(imageUrl[2]);
      };
    const handleClick3 = () => {
        // Change the image source when clicked
        setImageSrc(imageUrl[3]);
        console.log(imageUrl[3]);
      };
  return (
    <>

    <section id="prodetails">
    <div className="single-pro-image">
      <img src={imageSrc} width="100%" id="MainImg" alt=""/>  
      <div className="small-img-group">
        <div className="small-img-col">
            <img src={imageUrl[0]} width="100%" onClick={handleClick}  className="small-img" alt=""/>
        </div>
        <div className="small-img-col">
            <img src={imageUrl[1]} width="100%" onClick={handleClick1} className="small-img" alt=""/>
        </div>
        <div className="small-img-col">
            <img src={imageUrl[2]} width="100%" onClick={handleClick2} className="small-img" alt=""/>
        </div>
        <div className="small-img-col">
            <img src={imageUrl[3]} width="100%" onClick={handleClick3} className="small-img" alt=""/>
        </div>
      </div>
    
    </div>
    <div className="single-pro-details">
        <h6>Home/ T-shirts</h6>
        <h4>Men's Fashion T-shirts</h4>
        <h2>$139.00</h2>
        <select>
            <option >Select Size</option>
            <option >XXL</option>
            <option >XL</option>
            <option >Large</option>
            <option >Medium</option>
            <option >Small</option>
        </select>
        <input type="number" value="1"/>
        <button className="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde cumque expedita omnis enim. Dolorum autem fugit adipisci esse molestiae quis iste, minus et cumque in qui sequi sint sed nobis dignissimos, pariatur, rem error maiores vero quam! Aperiam quam aut vero necessitatibus hic facere fugiat voluptates voluptas odio voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias. Provident, tenetur commodi distinctio suscipit, explicabo quisquam nostrum repellendus perferendis dicta, eum in error iste dolorum itaque alias perspiciatis magni laborum? Fugit nihil mollitia provident. Nulla impedit harum vitae, voluptatum sed nisi ipsum totam quas. Maiores earum officiis impedit? Labore.</span>
    </div>
</section>
<section className="new-arrival products">
    <h2>Featured Products</h2>
    <p>Summer collection new modern designs</p>
    <div className="pro-container">
        <div className="pro">
            <img src="images/products/n1.jpg" alt="" srcSet=""/>
            <div className="des">
                <span>addidas</span>
                <h5 >Cartoon Astraunut T-shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping Cart"></i></a>
        </div>
        <div className="pro">
            <img src="images/products/n2.jpg" alt="" srcSet=""/>
            <div className="des">
                <span>addidas</span>
                <h5 >Cartoon Astraunut T-shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping Cart"></i></a>
        </div>
        <div className="pro">
            <img src="images/products/n3.jpg" alt="" srcSet=""/>
            <div className="des">
                <span>addidas</span>
                <h5 >Cartoon Astraunut T-shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping Cart"></i></a>
        </div>
        <div className="pro">
            <img src="images/products/n4.jpg" alt="" srcSet=""/>
            <div className="des">
                <span>addidas</span>
                <h5 >Cartoon Astraunut T-shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping Cart"></i></a>
        </div>
    </div>
</section>

    </>
  )
  
}

export default Sproduct;