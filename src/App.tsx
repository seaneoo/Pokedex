import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />

        <Route path="/pokemon/:id" />

        <Route path="/404" />

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
