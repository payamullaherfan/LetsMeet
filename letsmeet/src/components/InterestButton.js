import "../styles/interestbutton.css";

const InterestButton = ({ interestName }) => {
  return (
    <button className="interestbtn">
      <div>{interestName}</div>
    </button>
  );
};

export default InterestButton;
