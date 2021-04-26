import React from "react";
import { Switch, Route } from "react-router";
import Auth from "./Auth";
import {SignUp ,SignIn, Productedit, ProductList, Products, HistoryList} from "./templetes/index"


const Router = () => {
  return(
  <Switch>
    <Route exact path={"/signup"} component={SignUp} />
    <Route exact path={"/signin"} component={SignIn} />
    
    <Auth>
    <Route path={"(/)"} component={ProductList} />
    <Route path={"/products/edit(/:id)?"} component={Productedit} />
    <Route path={"/product/:id"} component={Products} />
    <Route path={"/history"} component={HistoryList} />
    </Auth>
  </Switch>
  )
}

export default Router;