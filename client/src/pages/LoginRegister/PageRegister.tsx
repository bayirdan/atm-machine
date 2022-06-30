import { Link } from "react-router-dom";

import "./styleLoginRegister.scss";
const PageRegister = () => {
  return (
    <>
      <div className="login-register-page">
        <div className="login-register">
          <h1>Register</h1>
          <div className="form">
            <form>
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="surname" placeholder="surname" />
              <input type="text" name="email" placeholder="email" />
              <input type="password" name="password1" placeholder="password" />
              <input
                type="password"
                name="password2"
                placeholder="confirm password"
              />
              <input type="submit" value="Confirm" />
            </form>
          </div>
          <Link to="/login">
            <div className="link">Already have any account? Sign in</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageRegister;
