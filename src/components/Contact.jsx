import React from 'react'


function Contact() {
  return (
    <>
     <section className="page-header" id="contact-header">
        <h2>#KnowUs</h2>
        <p>Save more with Coupans and upto 70% off</p>
    </section>
    <section id="about">
        <div className="about-box">
            <div className="about-details" id="contact">
                <span>GET IN TOUCH</span>
                <br/>
                <h2>Visit one of our agency location or connect us today</h2>
                
                <h3>Head Office</h3>
                <div>
                    <li>
                        <i className="fa-regular fa-map"></i>
                        <p>shop no 2 Qasr-e-Fatima, Block E N.Nazimabad Karachi.</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-envelope"></i>
                        <p>FatemiTailors@gmail.com</p>
                    </li>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>+92 3452588377</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-clock"></i>
                        <p>Monday  To Saturday: 10.00am to 9.00pm</p>
                    </li>
                    
                </div>
            </div>
            <div className="about-image" id="map" style={{width:'750', height:'450',border:'0'}}>
          
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8493851041435!2d67.03676627530956!3d24.93720034218275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f86c370034b%3A0xf323b1ab8a972e02!2sFatemi%20Tailors!5e0!3m2!1sen!2s!4v1693306646580!5m2!1sen!2s" width="750" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     </section>
     <section id="form-details">
        <form action="">
            <span>Leave a Message</span>
            <h2>We love to hear from you.</h2>
            <input type="text" name="" id="" placeholder="Your Name"/>
            <input type="text" placeholder="email Address" name="" id=""/>
            <input type="text" placeholder="Subject" name="" id=""/>
            <textarea name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
            <button className="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src="images/people/1.png" alt=""/>
                <p><span>John Dee</span><br/> Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/>E-mail: contact@example.com</p>
            </div>
            <div>
                <img src="images/people/2.png" alt=""/>
                <p><span>John Dee</span><br/> Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/>E-mail: contact@example.com</p>
            </div>
            <div>
                <img src="images/people/3.png" alt=""/>
                <p><span>John Dee</span><br/> Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/>E-mail: contact@example.com</p>
            </div>
        </div>
     </section>
    </>
  )
}

export default Contact;