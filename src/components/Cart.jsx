import React from 'react'

function Cart() {
  return (
    <>
     <section className="page-header" id="contact-header">
        <h2>#Cart</h2>
        <p>Save more with Coupans and upto 70% off</p>
    </section>
<section  id="cart">
    <table width = "100%">
        <thead>
            <tr>
                <td>Remove</td>
                <td>Images</td>
                <td>Products</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>SubTotal</td>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td><a href="#"><i className="fa-solid fa-circle-xmark"></i></a></td>
            <td><img src="images/products/f1.jpg" alt=""/></td>
            <td>Cartoon Astraunut T-Shirt</td>
            <td>$118.19</td>
            <td><input type="number" defaultValue={1}  name="" id=""/></td>
            <td>$118.19</td>
        </tr>
        <tr>
            <td><a href="#"><i className="fa-solid fa-circle-xmark"></i></a></td>
            <td><img src="images/products/f2.jpg" alt=""/></td>
            <td>Cartoon Astraunut T-Shirt</td>
            <td>$118.19</td>
            <td><input type="number" defaultValue="1" name="" id=""/></td>
            <td>$118.19</td>
        </tr>
        <tr>
            <td><a href="#"><i className="fa-solid fa-circle-xmark"></i></a></td>
            <td><img src="images/products/f3.jpg" alt=""/></td>
            <td>Cartoon Astraunut T-Shirt</td>
            <td>$118.19</td>
            <td><input type="number" defaultValue="1" name="" id=""/></td>
            <td>$118.19</td>
        </tr>
            
        </tbody>
    </table>
</section>
<section id="cart-add">
    <div className="coupon">
        <h3>Apply Coupon</h3>
        <div>
            <input type="text" name="" id="" placeholder="Enter Your Coupon"/>
            <button className="normal">Apply</button>
        </div>
    </div>
    <div id="subtotal">
        <h3>Cart Total</h3>
        <table>
            <tbody style={{border:'none'}}>
            <tr>
                <td>Cart subtotal</td>
                <td>$ 335</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>$ 335</strong></td>
            </tr>
</tbody>
        </table>
        <button className="normal">proceed to checkout</button>
    </div>
</section>
    </>
  )
}

export default Cart