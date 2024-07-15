import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Logform from "./login/Login";
import Regform from "./registration/Registration";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logform />} />
      <Route path="/register" element={<Regform />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
