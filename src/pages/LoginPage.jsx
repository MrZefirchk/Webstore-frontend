import React from "react";
import { Link } from "react-router-dom";
import { SIGNIN_PAGE } from "../constants/routs";
import "../styles/AuthPages.css";

function LoginPage() {
  return (
    // <div className="login_form_conteiner">
    //   <form className="login_form">
    //     <div className="login_usernames_fields">
    //       <label htmlFor="">Username:</label>
    //       <input type="text" id="username" />
    //     </div>
    //     <div className="login_passwords_fields">
    //       <label htmlFor="">Password:</label>
    //       <input type="password" id="username" />
    //     </div>
    //   </form>
    // </div>
    <div className="form-container">
      <form>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account?</p>
          <Link to={SIGNIN_PAGE}>
            <p>Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
