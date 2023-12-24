import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";
import LoginPage from "@/pages/loginPage";
import { useToken } from "@/utils/token";
function App() {
  const { token, saveToken, clearToken, user, saveUser } = useToken();

  const router = createBrowserRouter([
    //จัดการ Page ต่างๆ
    {
      path: "/",
      element: <HomePage clearToken={clearToken} user={user} />,
    },
    {
      path: "/detail/:name",
      element: <DetailPage />,
    },
    // {
    //   path: "/login",
    //   element: <LoginPage setToken={saveToken} setUser={saveUser} />,
    // },
  ]);
  if (!token) {
    console.log("token", token);

    return <LoginPage setToken={saveToken} setUser={saveUser} />;
  }
  return (
    <div className="bg-[#E5E5E6] min-h-[100vh] ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
