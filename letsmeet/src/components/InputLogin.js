import "../styles/inputlogin.css";

const InputLogin = ({ title }) => {
  return (
    <div className="input-login">
      <div className="input-login-title"> {title} </div>
      <input className="text-input" type="text"></input>
    </div>
  );
};

export default InputLogin;
