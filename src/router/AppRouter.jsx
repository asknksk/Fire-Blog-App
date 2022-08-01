import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import store from "../store/index";
import { Provider } from "react-redux";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
