import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email")
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  
  const [email, setEmail] = useState(initialEmail)
  const loginHandler = (token, email) => {
    setToken(token);
    localStorage.setItem("token", token);
   
    const replacedEmail = email.replace(/[@.]/g, "");
    localStorage.setItem("email", replacedEmail)
    setEmail(replacedEmail)
     console.log(email,token)
  };
  const logoutHandler = () => {
    setToken(null);
    setEmail(null)
    localStorage.removeItem("token");
      localStorage.removeItem("email");
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email:email,
    login: loginHandler,
    logout: logoutHandler,
  };
  console.log(contextValue)
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
