const Item = ({ job }) => {
  return (
    <div className="item-container">
      <img src={job.logo} alt={`${job.company} logo`} className="item-logo" />
      <div className="item-details">
        <h3>{job.position}</h3>
        <h5>{job.company}</h5>
        <span>{job.type}</span> <span>{job.hours}</span>
      </div>
      <div className="item-details-2">
        <h6>{job.status}</h6>
        <h6 style={{ color: "rgba(9, 0, 32, 0.7)" }}>{job.date}</h6>
        <h6 style={{ fontWeight: 700 }}>{job.location}</h6>
      </div>
    </div>
  );
};

export default Item;
