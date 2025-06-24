import WebpImage from './WebpImage/WebpImage';
import ButtonStarted from './Started/ButtonStarted';
function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <span>
          About Us
          <br />
        </span>
        <h2>About</h2>
        <p>Who we are and how we create digital excellence</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <WebpImage src={'images/about.png'} className="img-fluid" />
          </div>
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>
              We’re a team of developers with over 15 years of combined
              experience in software companies across global markets. From small
              business websites to complex systems serving clients in the US and
              Europe — we’ve done it all.
            </h3>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i>{' '}
                <span>
                  Experience across diverse industries and project scales
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{' '}
                <span>
                  MVP development for startups with speed, precision, and care
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{' '}
                <span>
                  Commitment to quality control, reliability, and on-time
                  delivery
                </span>
              </li>
            </ul>
            <p>
              We've built apps ranging from simple planners to advanced internal
              tools for corporations. Clean architecture, smart solutions, and
              clarity in execution — that’s what we bring. Explore our portfolio
              to see what we’ve delivered.
            </p>
            <p>
              <ButtonStarted
                href="#contact"
                title="Let’s talk about your project"
                className="btn-getstarted ms-0 p-3 d-inline-flex"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
