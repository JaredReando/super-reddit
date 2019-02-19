import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import Main from "./Main";

function App(){

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
