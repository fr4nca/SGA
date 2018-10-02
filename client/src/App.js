import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Painel from "./components/Painel";

import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/painel" component={Painel} />
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
