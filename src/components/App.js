import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Doações from "./Doações";
import Pedidos from "./Pedidos";
import Oficinas from "./Oficinas";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Doações" component={Doações} />
            <Route path="/Pedidos" component={Pedidos} />
            <Route path="/Oficinas" component={Oficinas} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
