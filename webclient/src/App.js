import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Home from "./view/screens/Home";
import Login from "./view/screens/Login";
import SignUp from "./view/screens/SignUp";
import SignOut from "./view/screens/Signout";
import NavBar from "./view/components/navbar";
import Footer from "./view/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./view/styles/style.css";


function App() {
  return (
    <><NavBar /><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </BrowserRouter><Footer/></>
  );
}

export default App;
