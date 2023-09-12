const EmployersCards = ({ cards }) => {
  return (
    <div className="container">
      <div className="employers-cards">
        {cards.map((card) => (
          <div className="employers-card" key={card.id}>
            <h3>{card.plan}</h3>
            <h2 className={card.paid && "paid"}>{card.cost}</h2>
            <span>{card.duration}</span>
            <div className="line"></div>
            {card.markFeatures.map((feature) => (
              <div className="features">
                <img src={card.mark} alt="" />
                <h5 className="mark">{feature}</h5>
              </div>
            ))}
            {card.cancelFeatures.map((cancelFeature) => (
              <div className="features">
                <img src={card.cancel} alt="" />
                <h5 className="mark cancel">{cancelFeature}</h5>
              </div>
            ))}
            <button className="btn">{card.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployersCards;
