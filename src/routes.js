import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Posts from "./pages/Posts";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />

      <Route path="/posts" component={Posts} />
    </Switch>
  );
}
