import React from 'react'

function Blog() {
  return (
    <>
        <section className="page-header" id = "blog-header">
        <h2>#ReadMore</h2>
        <p>Read all case studies about our products</p>
    </section>
 <section id="blog">
    <div className="blog-box">
        <div className="blog-image">
            <img src="images/blog/b1.jpg" alt=""/>
        </div>
        <div className="blog-details">
            <h4>The Cotton-Jersey zip up Hoodies</h4>
            <p>Kickstarter man braid godard coloring book. Reclette waistcoat selfies wolf chartreuse hexagon irony, godard...</p>
            <a href="#"> Continue reading</a>
        </div>
        <h1>13/01</h1>
    </div>
    <div className="blog-box">
        <div className="blog-image">
            <img src="images/blog/b2.jpg" alt=""/>
        </div>
        <div className="blog-details">
            <h4>The Cotton-Jersey zip up Hoodies</h4>
            <p>Kickstarter man braid godard coloring book. Reclette waistcoat selfies wolf chartreuse hexagon irony, godard...</p>
            <a href="#"> Continue reading</a>
        </div>
        <h1>13/02</h1>
    </div>
    <div className="blog-box">
        <div className="blog-image">
            <img src="images/blog/b3.jpg" alt=""/>
        </div>
        <div className="blog-details">
            <h4>The Cotton-Jersey zip up Hoodies</h4>
            <p>Kickstarter man braid godard coloring book. Reclette waistcoat selfies wolf chartreuse hexagon irony, godard...</p>
            <a href="#"> Continue reading</a>
        </div>
        <h1>13/03</h1>
    </div>
    <div className="blog-box">
        <div className="blog-image">
            <img src="images/blog/b4.jpg" alt=""/>
        </div>
        <div className="blog-details">
            <h4>The Cotton-Jersey zip up Hoodies</h4>
            <p>Kickstarter man braid godard coloring book. Reclette waistcoat selfies wolf chartreuse hexagon irony, godard...</p>
            <a href="#"> Continue reading</a>
        </div>
        <h1>13/04</h1>
    </div>
    <div className="blog-box">
        <div className="blog-image">
            <img src="images/blog/b5.jpg" alt=""/>
        </div>
        <div className="blog-details">
            <h4>The Cotton-Jersey zip up Hoodies</h4>
            <p>Kickstarter man braid godard coloring book. Reclette waistcoat selfies wolf chartreuse hexagon irony, godard...</p>
            <a href="#"> Continue reading</a>
        </div>
        <h1>13/05</h1>
    </div>
 </section>


   <section id="pagination" className="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#"><i className="fa-solid fa-right-long"></i></a>
   </section>
    </>
    )
}

export default Blog