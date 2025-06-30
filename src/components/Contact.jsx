import ContactForm from './Form/ContactForm';
function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <span>Contact</span>
        <h2>Contact</h2>
        <p>
          We’d love to hear from you — drop us a line and let’s talk about your
          idea
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
