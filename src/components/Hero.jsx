function Hero() {
    return(
        <section id="hero" class="hero section">
        <div class="container">
            <div class="row gy-4">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                <h1>Elegant and creative solutions</h1>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <div class="d-flex">
                <a href="#about" class="btn-get-started">Get Started</a>
                
                </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="100">
                <img src="images/hero-img.png" class="img-fluid animated" alt=""/>
            </div>
            </div>
        </div>
    </section>
    );
}
export default Hero;
