import { useState } from "react";
import LoginPage from "@/components/FormLogin/LoginPage";
import RegisterPage from "@/components/FormRegister/RegisterPage";
import axios from "axios";
import { POKEMON_USER_URL } from "@/utils/constant";
import { Alert } from "antd";
// import { Input } from "@material-tailwind/react";
const DEFAULT_ALERT: any = {
  data: "",
  type: "info",
};
const loginPage = ({ setToken, setUser }: any) => {
  const [state, setState] = useState("login");
  const [alertData, setAlertData] = useState(DEFAULT_ALERT);

  const onChangeState = (page: any) => {
    setState(page);
    onClearError();
  };

  const onRegister = async (data: any) => {
    const response = await axios.post(`${POKEMON_USER_URL}register`, data);

    if (response.data.success) {
      console.log(response.data.success);

      setAlertData({
        data: "REGISTER SUCCESSFUL",
        type: "success",
      });
    } else {
      setAlertData({
        data: response.data.data,
        type: "error",
      });
      console.log(alertData.type);
    }
  };
  const onLogin = async (data: any) => {
    console.log(data);
    const response = await axios.post(`${POKEMON_USER_URL}login`, data);
    console.log("response", response);
    if (response.data.success) {
      console.log(setToken);
      setUser(response.data.data[0]);
      setToken(response.data._token);
      setAlertData({
        data: "LOGIN SUCCESSFUL",
        type: "success",
      });
    } else {
      setAlertData({
        data: response.data.data,
        type: "error",
      });
    }
  };
  const onClearError = () => {
    setAlertData(DEFAULT_ALERT);
  };

  return (
    <div className="flex justify-center min-h-[100vh] items-center bg-slate-900">
      {alertData.data && (
        <Alert
          className="absolute top-3"
          message={alertData.data}
          type={alertData.type}
          showIcon
        />
      )}
      <div className="flex justify-center w-[450px] h-[600px] bg-white rounded-[30px] shadow-xl shadow-[white]">
        {state === "login" && (
          <LoginPage
            onChangeState={onChangeState}
            onLogin={onLogin}
            onClearError={onClearError}
          />
        )}
        {state === "register" && (
          <RegisterPage
            onChangeState={onChangeState}
            onRegister={onRegister}
            onClearError={onClearError}
          />
        )}
      </div>
    </div>
  );
};

export default loginPage;
