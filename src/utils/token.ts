import { useState } from "react";
import jwt_decode from "jwt-decode";
function useToken() {
  const saveToken = (tokenData: any) => {
    window.localStorage.setItem("token", JSON.stringify(tokenData));
    setToken(tokenData);
  };

  const saveUser = (userData: any) => {
    window.localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  const getToken = () => {
    let tokenString: any = window.localStorage.getItem("token");
    let userString: any = window.localStorage.getItem("user");
    let userToken = JSON.parse(tokenString);
    let userData = JSON.parse(userString);
    if (userToken) {
      let decode: any = jwt_decode(userToken);
      let currentTiem = Math.floor(new Date().getTime() / 1000);

      if (decode.exp - currentTiem <= 0) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        return { userToken: "", userData: "" };
      }
      return { userToken, userData };
    } else {
      return { userToken: "", userData: "" };
    }
  };

  const clearToken = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    setToken("");
    setUser("");
  };

  const [token, setToken] = useState(getToken().userToken);
  const [user, setUser] = useState(getToken().userData);
  return {
    token,
    user,
    saveToken,
    saveUser,
    clearToken,
  };
}

export { useToken };
