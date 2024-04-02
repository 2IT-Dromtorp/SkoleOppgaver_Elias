import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NowContext } from "../context";
import "../Form.css";

const LoginForm = () => {
  const { socket } = useContext(NowContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    if (!socket) return;
    socket.on("loginResult", (data) => {
      if (data.code === "sigma") {
        console.log("Login successful");
        nav("/token");
      } else {
        console.log("Login failed");
      }
    });
    return () => {
      socket.off("loginResult");
    };
  });

  const handleLogin = (e) => {
    e.preventDefault();
    socket.emit("login", { username, password });

    if (username === "user" && password === "password") {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
