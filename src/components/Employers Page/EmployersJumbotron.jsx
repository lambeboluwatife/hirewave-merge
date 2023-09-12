import React from "react";

const EmployersJumbotron = ({ cards }) => {
  return (
    <div className="jumbotron-wrapper">
      <div className="jumbotron employers-jumbotron">
        <div className="container">
          <h2>Connect With High Quality Candidates Faster Than Ever</h2>
          <h6>
            Our subscription plans are designed to elevate your small business's
            hiring strategy. Choose the plan that fits <br /> your goals and
            unlock a world of top-tier candidates and streamlined hiring
            processes.
          </h6>
        </div>
      </div>

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
    </div>
  );
};

export default EmployersJumbotron;
