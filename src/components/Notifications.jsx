const Notifications = ({ text, type }) => {
  return (
    <div id="toasts">
      <div className={`toast ${type}`}>{text}</div>
    </div>
  );
};

export default Notifications;
