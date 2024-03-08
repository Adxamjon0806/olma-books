import React, { useState } from "react";
import Picture from "../assets/Picture.png";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="registration_sec">
      <img src={Picture} alt="library" className="registration_sec_picture" />
      <section className="registration_sec_proccess">
        <img src={Logo} alt="" />
        <div>
          <p>Welcome back!</p>
          <h3>Login to your account</h3>
        </div>
        <div className="inputs">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btns">
          <button className="register_btn">Login</button>
          <Link className="login_btn" to={"/login"}>
            Register
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Register;
