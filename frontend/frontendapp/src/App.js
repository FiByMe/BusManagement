import "./App.css";
import React from "react";
import Header from "../src/components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import Login from "../src/components/Layouts/Login";
import Register from "../src/components/Layouts/Content/Register";
import Company from "../src/components/Layouts/Content/Company";
import Search from "./components/Layouts/Content/Tour";
import TourDetails from "./components/Layouts/Content/TourDetails";
import Tour from "./components/Layouts/Content/Tour";
import {Routes, Route } from "react-router-dom";
import LoginView from "./components/Layouts/Content/LoginView";
import Layouts from "./components/Layouts/View/Layouts";
import UserAccount from "./components/Layouts/Content/UserAccount";

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default function App() {
  return (
    <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/user" element={<UserAccount />}/>
          <Route path="/" element={<Layouts />}>
            <Route path="comment" element={<Comment />}/>
            <Route path="company" element={<Company />}/>
            <Route path="tour" element={<Tour />}/>
          </Route>
    </Routes>
  );
}
