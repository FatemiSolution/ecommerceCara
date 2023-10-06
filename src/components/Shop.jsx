import React from 'react'
import { Link  } from 'react-router-dom';

function Shop(props) {
   
  
  return (
    <>
     <section className="page-header">
        <h2>#stayhome</h2>
        <p>Save more with Coupans and upto 70% off</p>
    </section>
    <section className="products ">
       
        <div className="pro-container">
            <div className="pro"  >
                <Link style={{listStyle:'none',textDecoration:'none'}} to='/sProduct'onClick={()=>{props.getImg(['images/products/f1.jpg','images/products/f2.jpg','images/products/f3.jpg','images/products/f4.jpg'])}}>
                <img src="images/products/f1.jpg" alt="" srcSet=""/>
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
                <i className="fa-solid fa-cart-shopping Cart"></i>
                </Link>
            </div>
            <div className="pro">
            <Link style={{listStyle:'none',textDecoration:'none'}} to='/sProduct'onClick={()=>{props.getImg(['images/products/f2.jpg','images/products/f1.jpg','images/products/f3.jpg','images/products/f4.jpg'])}}>
                <img src="images/products/f2.jpg" alt=""  srcSet=""/>
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
                <i className="fa-solid fa-cart-shopping Cart"></i>
                </Link>
            </div>
            <div className="pro">
                <img src="images/products/f3.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/f4.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/f5.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/f6.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/f7.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/f8.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/n5.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/n6.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/n7.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
            <div className="pro">
                <img src="images/products/n8.jpg" alt="" srcSet=""/>
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
                <Link to="#"><i className="fa-solid fa-cart-shopping Cart"></i></Link>
            </div>
        </div>
    </section>
    <section id="pagination" className="section-p1">
    <Link to="#">1</Link>
    <Link to="#">2</Link>
    <Link to="#"><i className="fa-solid fa-right-long"></i></Link>
   </section>
    </>
  )
}

export default Shop