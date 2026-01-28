import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const ProtectedRoute = () => {
  const token = Cookies.get("jwtToken");

  if (token === undefined) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedRoute;
