import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) login();
    else alert("Enter email & password");
  };

  return (
    <div>
       
    <div className="login-wrapper">
     
      <div className="login-card">

        <div className="login-icon">🔒</div>
        <h2>Sign in</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign in</button>
        </form>

        <div className="login-links">
          <a href="#">Forgot password?</a>
          <a href="#">Don’t have an account? Sign up</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
