import "./App.css";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import BestSeller from "./components/Layouts/Content/BestSeller";
import Company from "./components/Layouts/Content/Company";
import Comment from "./components/Layouts/Content/Comment";
import Login from "../src/components/Layouts/Login";

import Register from "../src/components/Layouts/Content/Register";

import Search from "./components/Layouts/Content/Tour";
import TourDetails from "./components/Layouts/Content/TourDetails";
import Tour from "./components/Layouts/Content/Tour";
import {Routes, Route } from "react-router-dom";
import LoginView from "./components/Layouts/Content/LoginView";
import Layouts from "./components/Layouts/View/Layouts";

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
          <Route path="/login" element={<LoginView />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={<Layouts />}>
            <Route path="comment" element={<Comment />}/>
            <Route path="company" element={<Company />}/>
            <Route path="tour" element={<Tour />}/>
          </Route>
    </Routes>
  );
}
