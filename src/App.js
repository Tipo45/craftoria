import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import './App.css';
import Logform from "./login/Login";
import Regform from "./registration/Registration";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logform />} />
      <Route path="/register" element={<Regform />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
