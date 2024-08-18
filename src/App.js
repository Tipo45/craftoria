import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin_Home";
import './App.css';
import Logform from "./pages/login/Login";
import NoPage from "./Nopage";
import Client from "./pages/Cuserside/Client";
import Regform from "./pages/registration/Registration";
import YourOrders from "./components/ClientUserProfile/Userorders";
import Homepage from "./pages/HomePage/Homepage";
import SkillsorService from "./pages/SkillsorService/SkillsorService";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registration" element={<Regform />} />
      <Route path="/login" element={<Logform />} />
      <Route path="/SkillandServices" element={<SkillsorService />} />
      <Route path="/admin/:activepage" element={<Admin />} />
      <Route path="/client/:activepage" element={<Client />} /> 
      <Route path="/clientorders" element={<YourOrders />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
