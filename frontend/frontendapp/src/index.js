import React from "react";
import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Register from "./components/Layouts/Content/Register";
import LoginView from "./components/Layouts/Content/LoginView";
import Search from "./components/Layouts/Content/Tour";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import Comment from "./components/Layouts/Content/Comment";
import Login from "./components/Layouts/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
