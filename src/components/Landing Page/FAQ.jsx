import { Link } from "react-router-dom";

const FAQ = ({ faqs, toggle, selected, faqContent }) => {
  return (
    <>
      <div className="faq">
        <div className="container">
          <h1>{faqContent.title}</h1>
          <h5>{faqContent.text}</h5>
          <div className="faqs">
            <div className="accordion">
              {faqs.map((faq, i) => (
                <div
                  className="faq-item"
                  key={faq.id}
                  onClick={() => toggle(i)}
                >
                  <div className="title">
                    <h4>{faq.question}</h4>
                    <span>
                      <img
                        src={selected === i ? "/Up Chevron.svg" : "/Down.svg"}
                      />
                    </span>
                  </div>
                  <h6 className={selected === i ? "content show" : "content"}>
                    {faq.answer}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="faq-jumbo">
        <div className="">
          <div className="content">
            <h6>
              Hirewave - the <span>easiest way</span> to discover top-tier
              talent for{" "}
              <span>
                your <br />
                business
              </span>
              . Find the <span>perfect match</span> for your hiring needs.{" "}
            </h6>
            <Link to="/jobs">
              <button className="btn3">Post A Job</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
