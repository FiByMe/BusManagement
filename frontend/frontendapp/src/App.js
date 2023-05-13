import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import Login from "../src/components/Layouts/Login";
import Register from "../src/components/Layouts/Content/Register";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
