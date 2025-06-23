import IsotopeContainer from './Isotope/IsotopeContainer';
import filterIsotope from './Isotope/filterIsotope';
import listIsotope from './Isotope/listIsotope';
function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <span>Portfolio</span>
        <h2>Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container">
        <IsotopeContainer filters={filterIsotope} listsIsotope={listIsotope} />
      </div>
    </section>
  );
}
export default Portfolio;
