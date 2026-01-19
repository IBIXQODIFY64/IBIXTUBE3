import { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dkkzdkikd/image/upload/v1767169020/Gemini_Generated_Image_b9obivb9obivb9ob_kcwgdw.png"
        className="login-site-logo login-logo-lg"
      />
      <img
        src="https://res.cloudinary.com/dkkzdkikd/image/upload/v1767166622/3D_glasses-amico_ht62yc.png"
        className="login-poster"
      />

      <form className="login-form">
        <img
          src="https://res.cloudinary.com/dkkzdkikd/image/upload/v1767169020/Gemini_Generated_Image_b9obivb9obivb9ob_kcwgdw.png"
          className="login-site-logo login-logo-sm"
        />
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter username"
          className="login-input"
          value={username}
          onChange={handleUsername}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter password"
          className="login-input"
          value={password}
          onChange={handlePassword}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
        <p>Login and Enjoy</p>
      </form>
    </div>
  );
};

export default Login;
