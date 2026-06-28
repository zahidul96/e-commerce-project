import AuthContext from "../../auth/AuthContext";
import "./LoginForm.css";
import React, { useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBB7QrrzH06y2C1B2_Nc1nxpviaokj_qMw",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            authCtx.login(data.idToken,data.email);
            console.log("login success")
            console.log(data)
            navigate('/store', {replace:true})
          });
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err)
      });
      emailInputRef.current.value = ""
      passwordInputRef.current.value = ""
  };
  return (
    <section className="auth">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Emial</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordInputRef} required />
        </div>
        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};
export default LoginForm;
