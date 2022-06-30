import { Link } from "react-router-dom";
import "./styleHeader.scss";

const Header = () => {
  return (
    <div className="header-box">
      <Link to="/">
        <div className="logo-box">
          <div className="logo">
            <span>B</span>
            <span>B</span>
          </div>
          <h1>BANK</h1>
        </div>
      </Link>
      <div className="operations">
        <Link to="/transaction/deposit">
          <button className="btn operation">Deposit</button>
        </Link>
        <Link to="/transaction/withdraw">
          <button className="btn operation">Withdraw</button>
        </Link>
        <Link to="/">
          <button className="btn operation logout">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
