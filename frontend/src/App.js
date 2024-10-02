import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";
import Booking from "./components/Admin/Booking";
import Admin from "./components/Admin/Admin";
import Privateroutes from "./components/Privateroutes";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/book" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Privateroutes />}>
          <Route path="/admin/user" element={<Admin />} />
          <Route path="/Booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
