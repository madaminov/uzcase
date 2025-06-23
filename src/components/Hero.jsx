import WebpImage from './WebpImage/WebpImage';
function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <h1>Elegant websites, built to perform</h1>
            <p>
              We’re a team of developers building fast, responsive, and scalable
              websites for modern businesses
            </p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">
              Message Us
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <WebpImage
              src={'images/hero-img.png'}
              className="img-fluid animated"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
