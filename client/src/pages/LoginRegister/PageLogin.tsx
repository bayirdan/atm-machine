import { Link } from "react-router-dom";

import "./styleLoginRegister.scss";
const PageLogin = () => {
  return (
    <>
      <div className="login-register-page">
        <div className="login-register">
          <h1>Login</h1>
          <div className="form">
            <form>
              <input type="text" name="email" placeholder="email" />
              <input type="password" name="password1" placeholder="password" />
              <input type="submit" value="Confirm" />
            </form>
          </div>
          <Link to="/register">
            <div className="link">Don't have any account? Sign up</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageLogin;
