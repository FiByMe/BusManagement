import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import BestSeller from "./components/Layouts/Content/BestSeller";
import Company from "./components/Layouts/Content/Company";
import Comment from "./components/Layouts/Content/Comment";
import Login from "../src/components/Layouts/Login";
import Search from "./components/Layouts/Content/Tour";
import TourDetails from "./components/Layouts/Content/TourDetails";
import Tour from "./components/Layouts/Content/Tour";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default function App() {
  return (
    // <Router>
    //   <div>
    //     {/* <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home </Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav> */}

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       {/* <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users /> */}
    //       {/* </Route> */}

    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/">
    //         <Header />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <>
      <Header />
      <Tour />
      <TourDetails />
      <Footer />
    </>
  );
}
