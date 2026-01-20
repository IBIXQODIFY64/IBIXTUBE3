import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import "./login.css";

import Cookies from "js-cookie";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const userData = { username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    // const response = await fetch(
    //   "https://ibixtubeserver.onrender.com/ibix/api/login",
    //   options,
    // );
    //...
    const response = await fetch(
      "http://localhost:4000/ibix/api/login",
      options,
    );
    const result = await response.json();

    if (response.ok === true) {
      Cookies.set("jwtToken", result.token, { expires: 30 });
      navigate("/");
    } else {
      setErrorMsg(result.message);
    }
  };

  const token = Cookies.get("jwtToken");
  if (token !== undefined) {
    return <Navigate to="/" replace />;
  }

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

      <form className="login-form" onSubmit={handleSubmitForm}>
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
        {errorMsg !== "" && <p>{errorMsg}</p>}
        <p>Login and Enjoy</p>
      </form>
    </div>
  );
};

export default Login;
