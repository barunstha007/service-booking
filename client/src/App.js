import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Public
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Bike from "./components/Bike";

import Packages from "./components/Packages";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Footer from "./components/Footer";
// Redux
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";
import { serviceCenterList } from "./redux/actions/serviceCenterList";

import setAuthToken from "./utils/setAuthToken";

// If localstorage has token, set token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(serviceCenterList());
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <div
        className="App"
        style={{ minHeight: "95vh", backgroundColor: "#f5f2f2" }}
      >
        <Router>
          <Navigation />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/packages" exact>
              <Packages />
            </Route>
            {/* User */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <UserRegistration />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/bike">
              <Bike />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
