import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Interests from "./components/Interests.js";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-page">
        <Login />
        <Interests />
      </div>
    </div>
  );
}

export default App;
