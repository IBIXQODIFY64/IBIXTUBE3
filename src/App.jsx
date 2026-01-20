import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import "./App.css";
import Favorites from "./components/Favorites/favorites";
import NotFound from "./components/NotFound/notFound";
import ShowDetails from "./components/ShowDetails/showDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/show-details/:posterId" element={<ShowDetails />} />
        <Route path="/my-favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
