import ButtonStarted from './Started/ButtonStarted';
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
            <h1>Apps that scale. Code that lasts.</h1>
            <p>
              We’re a team of developers building fast, responsive, and scalable
              websites and apps for modern businesses
            </p>
            <div className="d-flex">
              <ButtonStarted
                href="#contact"
                title="Message Us"
                className="btn-get-started"
              />
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
