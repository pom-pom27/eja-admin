import { Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import HomePage from "./pages/home-page/HomePage";
import Users from "./pages/users/Users";
interface IApp {}

const App = ({}: IApp) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Dashboard />} />
          <Route path="users">
            <Route index element={<Users />} />
          </Route>
          <Route path="login" />
          <Route path="register" />
          <Route path="eja-admin" element={<Navigate to="/" />} />
          <Route path="products"></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
