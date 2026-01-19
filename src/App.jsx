import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
