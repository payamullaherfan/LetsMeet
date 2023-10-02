import InputLogin from "./InputLogin.js";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-title">Log In</div>
      <div className="input-login-wrapper">
        <InputLogin title="Email" />
        <InputLogin title="Password" />
      </div>
      <div className="or-section">
        <hr></hr>
        <div> or </div>
        <hr></hr>
      </div>
      <button className="sign-up-btn">
        <div>Sign Up</div>
      </button>
    </div>
  );
};

export default Login;
