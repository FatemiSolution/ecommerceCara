import React from 'react'
function About() {
  return (
    <>
    
        <section className="page-header" id="about-header">
        <h2>#KnowUs</h2>
        <p>Save more with Coupans and upto 70% off</p>
    </section>
    <section id="about">
        <div className="about-box">
            <div className="about-image">
                <img src="images/about/a6.jpg" alt=""/>
            </div>
          <div className="about-details">
                <h2>Who we Are ?</h2>
                <p>Kickstarter man braid godard coloring book. Reclette waistcoat selfies wolf chartreuse hexagon irony, godardl Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, expedita ad quam sequi magnam, quibusdam molestias dicta eaque mollitia et voluptatibus similique non fugit aspernatur aliquam necessitatibus. Omnis, voluptatibus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, et! Numquam architecto expedita minima porro nulla aut vero recusandae magnam fugit, delectus tempora dolor rem, culpa nemo exercitationem ullam tempore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque in rem ea est quos quae repudiandae aperiam esse! Adipisci qui quas quia ipsam sit sapiente consequuntur perferendis doloremque excepturi.</p>
                <br/><br/>
                <abbr>Create stunning images with as much as a little control as you like thanks to a choice of basic and creative models.</abbr>
                <br/><br/>
                <marquee bgcolor="#ccc" width="100%" loop="-1" scrollamount="5">Create stunning images with as much as a little control as you like thanks to a choice of basic and creative models.</marquee>
            </div> 
        </div>
     </section>
     <section id="about-app">
        <h1>Download our <a href="#">App</a></h1>
        <div className="video">
        <video loop autoPlay muted>
                            <source src={'images/about/1.mp4'} type="video/mp4" />
                        </video>
            {/* <ReactPlayer  muted loop url="images/about/1.mp4"></ReactPlayer> */}
        </div>
     </section>
    <section className="features">
        <div className="feat">
            <img className="f" src="images/features/f1.png" alt="" srcSet=""/>
            <h6>Free Shipping</h6>
        </div>
        <div className="feat">
            <img className="f" src="images/features/f2.png" alt="" srcSet=""/>
            <h6>Online Order</h6>
        </div>
        <div className="feat">
            <img className="f" src="images/features/f3.png" alt="" srcSet=""/>
            <h6>Save Money</h6>
        </div>
        <div className="feat">
            <img className="f" src="images/features/f4.png" alt="" srcSet=""/>
            <h6>Promotions</h6>
        </div>
        <div className="feat">
            <img className="f" src="images/features/f5.png" alt="" srcSet=""/>
            <h6>Happy sales</h6>
        </div>
        <div className="feat">
            <img className="f" src="images/features/f6.png" alt="" srcSet=""/>
            <h6>F24/7 Support</h6>
        </div>
    </section>
    </>
  )
}

export default About