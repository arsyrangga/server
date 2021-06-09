import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const Login = () => {
  const isLogin = sessionStorage.getItem("isLogin");

  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/users/${inputData.username}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data[0].username == inputData.username &&
          data[0].password == inputData.password
        ) {
          alert("Login berhasil");
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("user", inputData.username);
          window.location.href = "/";
        } else {
          alert("Username atau Password salah");
        }
      });
  };

  return (
    <>
      {isLogin ? (
        (window.location.href = "/")
      ) : (
        <>
          <div className="loginContainer">
            <form className="loginBox" onSubmit={handleLogin}>
              <h3 className="LoginHeader">Login</h3>
              <label htmlFor="PhoneNumber" className="PhoneNumber">
                username
              </label>
              <input
                id="PhoneNumber"
                type="text"
                className="PhoneNumberInput"
                onChange={(e) => {
                  setInputData({
                    ...inputData,
                    username: e.target.value,
                  });
                  console.log(inputData);
                }}
              />
              <label htmlFor="Password" className="Password">
                Password
              </label>
              <input
                type="password"
                id="Password"
                className="PasswordInput"
                autoComplete="false"
                onChange={(e) => {
                  setInputData({
                    ...inputData,
                    password: e.target.value,
                  });
                  console.log(inputData);
                }}
              />
              <a href="#" className="forgotPassword">
                Lupa Password?
              </a>
              <button type="submit" className="btnLogin">
                Login
              </button>
              <h3 className="accountText">Belum Punya Akun?</h3>
              <Link to="/register" className="toRegister">
                Register Disini
              </Link>
            </form>
          </div>

          <section className="login">
            <div className="bgLogin1"></div>
            <div className="bgLogin2"></div>
          </section>
        </>
      )}
    </>
  );
};

export default Login;
