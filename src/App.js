import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin_Home";
import './App.css';
import Logform from "./pages/login/Login";
import NoPage from "./Nopage";
import Client from "./pages/Cuserside/Client";
import Regform from "./pages/registration/Registration";
import Homepage from "./pages/HomePage/Homepage";
import SkillsorService from "./pages/SkillsorService/SkillsorService";
import Artisan from "./pages/Auserside/Artisan";
import Registrationartisan from "./pages/registration/Registrationartisan";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/clientregistration" element={<Regform />} />
      <Route path="/artisanregistration" element={<Registrationartisan />} />
      <Route path="/login" element={<Logform />} />
      <Route path="/productandServices/:activepage" element={<SkillsorService />} />
      <Route path="/admin/:activepage" element={<Admin />} />
      <Route path="/client/:activepage" element={<Client />} /> 
      <Route path="/artisan/:activepage" element={<Artisan />} />


      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
