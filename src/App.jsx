import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import "./App.css";
import NotFound from "./components/NotFound/notFound";
import ShowDetails from "./components/ShowDetails/showDetails";
import Favorites from "./components/Favorites/Favorites";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/show-details/:posterId" element={<ShowDetails />} />
          <Route path="/my-favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
