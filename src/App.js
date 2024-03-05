import React, { useEffect, useState } from "react";
import "./App.css";
import Light from "./Images/brightness.png";
import Moon from "./Images/moon.png";
import sync from "./Images/sync.png";

const App = () => {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const generateCaptcha = () => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters[Math.floor(Math.random() * characters.length)];
    }
    setCaptcha(captcha);
  };

  const handleCaptchaInput = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput === captcha) {
      alert('verified')
    } else {
      alert('Incorrect')
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (darkMode) {
      metaThemeColor.setAttribute("content", "#111111");
    } else {
      metaThemeColor.setAttribute("content", "#ffffff");
    }
  }, [darkMode]);

  useEffect(()=>{
    generateCaptcha()
  },[])

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <button
        className={`button_mode ${darkMode ? "button_dark" : "button_light"}`}
        onClick={handleDarkMode}
      >
        {darkMode ? (
          <img src={Light} alt={"Light"} />
        ) : (
          <img src={Moon} alt={"Dark"} />
        )}
      </button>
      <div className="form_root">
        <div className="header">
          <h1>Sign Up Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`input_ele  ${darkMode ? "input_dark" : "input_light"}`}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            className={`input_ele  ${darkMode ? "input_dark" : "input_light"}`}
            placeholder="Password"
          />
          <input
            type="password"
            className={`input_ele  ${darkMode ? "input_dark" : "input_light"}`}
            id="confirm-password"
            name="confirm-password"
            required
            placeholder="Confirm Password"
          />
          <h2 className={`captcha ${darkMode ? "captcha_dark" : "captcha_light"}`}>Fill the captcha : {captcha}</h2>
          <div className="captcha_root">
            <input
              type="text"
              id="captcha"
              name="captcha"
              className={`input_ele captcha_ele ${
                darkMode ? "input_dark" : "input_light"
              }`}
              onChange={handleCaptchaInput}
              required
              placeholder="Captcha"
            />
            <button type="button" className="captcha_btn" onClick={generateCaptcha}>
              <img src={sync} alt={"sync"} />
            </button>
          </div>
          <button type="submit" className={`button_signup ${darkMode ? "buttonSign_dark" : "buttonSign_light"}`}>Sign Up</button>
        </form>
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Sign Up Form" />
        <meta
          property="og:description"
          content="This is a sign-up form with a captcha."
        />
      </div>
    </div>
  );
};

export default App;
