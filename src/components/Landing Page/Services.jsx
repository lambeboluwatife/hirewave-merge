const Services = ({ services }) => {
  return (
    <div id="services" className="services">
      <div>
        <h2>Our Services</h2>
        <h6 className="service-detail">
          Our tailored services connect you with top emerging talent, ensuring
          your team stays <br /> competitive and dynamic. We’re here to help you
          build a thriving workplace that shapes <br /> the future of your
          business.
        </h6>
        <div className="container">
          <div className="services-content">
            {services.map((service) => (
              <div className="service-item" key={service.id}>
                <img src={service.image} alt={service.title} />
                <h4>{service.title}</h4>
                <h6>{service.description}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
