import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Logform from "./login/Login";
import Regform from "./registration/Registration";


function App() {
  return (
    <BrowserRouter>
    <Regform />
    <Logform />
    <Routes>
      <Route exact={true} element={<Regform />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
