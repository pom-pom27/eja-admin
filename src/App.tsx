import { Route, Routes } from "react-router-dom";
import "./app.scss";
import HomePage from "./pages/home-page/HomePage";
interface IApp {}

const App = ({}: IApp) => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login" />
          <Route path="register" />
          <Route path="users"></Route>
          <Route path="products"></Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
