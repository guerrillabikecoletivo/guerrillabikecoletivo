import React, { Component } from "react";
import Home from "./Home";
import Doacoes from "./Doacoes";
import Pedidos from "./Pedidos";
import Oficinas from "./Oficinas";
import NavBar from "./NavBar";
import Banco from "./Banco";
import Ajuda from "./Ajuda";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Doacoes" component={Doacoes} />
            <Route path="/Pedidos" component={Pedidos} />
            <Route path="/Oficinas" component={Oficinas} />
            <Route path="/Banco" component={Banco} />
            <Route path="/Ajuda" component={Ajuda} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
