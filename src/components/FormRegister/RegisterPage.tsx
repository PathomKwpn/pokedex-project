import { useState } from "react";

const RegisterPage = ({ onChangeState, onRegister, onClearError }: any) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
              Firstname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Firstname"
              onChange={(v) => {
                setFirstName(v.target.value);
                onClearError();
              }}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Lastname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Lastname"
              onChange={(v) => {
                setLastName(v.target.value);
                onClearError();
              }}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder="Username"
              onChange={(v) => {
                setUsername(v.target.value);
                onClearError();
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
                onRegister({
                  firstName,
                  lastName,
                  userName,
                  password,
                });
              }}
            >
              Register
            </button>
          </div>
          <div className="flex justify-center mt-5">
            Have a member?
            <span
              className="text-[blue] font-bold ml-2 cursor-pointer"
              onClick={() => {
                onChangeState("login");
              }}
            >
              {" "}
              Login now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
