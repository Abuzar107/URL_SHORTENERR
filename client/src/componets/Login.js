import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = axios
      .post("http://localhost:5000/auth/login", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Credentials");
      });

    console.log("response", response);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        {/* <Link
          to="/login"
          className="btn btn-defult border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link> */}
      </div>
    </div>
  );
}

export default Login;
