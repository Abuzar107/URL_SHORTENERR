import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./componets/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login";
import Home from "./componets/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
