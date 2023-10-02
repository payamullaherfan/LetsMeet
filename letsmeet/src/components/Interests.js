import "../styles/interests.css";
import InterestButton from "./InterestButton";

const Interests = () => {
  return (
    <div className="interests">
      <div className="interests-title">Interests</div>
      <div className="interests-btns">
        <InterestButton interestName="basketball"></InterestButton>
        <InterestButton interestName="volleyball"></InterestButton>
        <InterestButton interestName="tennis"></InterestButton>
        <InterestButton interestName="basketball"></InterestButton>
        <InterestButton interestName="volleyball"></InterestButton>
        <InterestButton interestName="tennis"></InterestButton>
        <InterestButton interestName="basketball"></InterestButton>
        <InterestButton interestName="volleyball"></InterestButton>
        <InterestButton interestName="tennis"></InterestButton>
        <InterestButton interestName="basketball"></InterestButton>
        <InterestButton interestName="volleyball"></InterestButton>
        <InterestButton interestName="tennis"></InterestButton>
        <InterestButton interestName="basketball"></InterestButton>
        <InterestButton interestName="volleyball"></InterestButton>
        <InterestButton interestName="tennis"></InterestButton>
      </div>
    </div>
  );
};

export default Interests;
