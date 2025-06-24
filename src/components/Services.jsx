const listServices = [
  {
    title: 'Startup Prototypes',
    description:
      'Quickly launch your MVP using modern low-code tools. Perfect for fast market testing.',
    icon: 'bi-activity',
  },
  {
    title: 'Startup Support',
    description:
      'From first lines of code to scaling — we guide your tech journey with care.',
    icon: 'bi-broadcast',
  },
  {
    title: 'Custom Applications',
    description:
      'Full-featured apps built from scratch with performance and usability in mind.',
    icon: 'bi-easel',
  },
  {
    title: 'Web Applications',
    description:
      'Responsive, scalable, and future-proof — designed to grow with your business.',
    icon: 'bi-bounding-box-circles',
  },
  {
    title: 'Mobile Development',
    description:
      'Native and hybrid mobile apps tailored to your product goals.',
    icon: 'bi-phone',
  },
  {
    title: 'Corporate Websites',
    description:
      'Conversion-focused sites that reflect your brand and drive results.',
    icon: 'bi-chat-square-text',
  },
];
function Services() {
  return (
    <section id="services" className="services section light-background">
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <span>Services</span>
        <h2>Services</h2>
        <p>What we can build for your business</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {listServices.map((list, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={'bi ' + list.icon}></i>
                </div>
                <h3>{list.title}</h3>
                <p>{list.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
