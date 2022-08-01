import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //! user will change
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
