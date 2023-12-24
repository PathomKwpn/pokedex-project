import { useState } from "react";

const LoginPage = ({ onChangeState, onLogin, onClearError }: any) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const haddleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col ">
      <div className="mt-[-50px] ">
        <img className="" src="/image/Pokedex_logo.png" alt="" />
      </div>
      <div className="flex justify-center mt-[70px]">
        <form
          className="flex flex-col justify-center w-[300px] h-[70%] pt-[40px]"
          onSubmit={haddleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(v) => {
                setUsername(v.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(v) => {
                setPassword(v.target.value);

                onClearError();
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-[100px] p-3 bg-blue-600 text-[white] font-bold rounded-md"
              onClick={() => {
                onLogin({ userName, password });
              }}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center mt-5">
            Not a member?
            <span
              className="text-[blue] font-bold ml-2 cursor-pointer"
              onClick={() => {
                onChangeState("register");
              }}
            >
              {" "}
              Register now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
