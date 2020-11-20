import React, {useContext} from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { Usuario } from "./Usuario";
import { Favoritos } from "./Favoritos";
import { NotFound } from "./NotFound";
import { User } from "./User";
import { CrearProducto } from "./CrearProducto";
import { Carrito } from "./Carrito";
import { CrearCategoria } from "./CrearCategoria";

import { GlobalContext } from "../GlobalContext";

export const Pages = () => {
  const state = useContext(GlobalContext)
  const [isAuth] = state.UserAPI.isAuth
  const [isAdmin] = state.UserAPI.isAdmin


  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/zoe/:id" exact component={Home} />
      <Route path="/detail/:id" exact component={Detail} /> 
      <Route path='/carrito' exact component={Carrito} /> 
      <Route path="/favoritos" exact component={isAuth ? Favoritos : Usuario} />
      <Route path="/usuario" exact component={isAuth ? User : Usuario} />
      <Route path="/category" exact component={isAdmin ? Carrito : NotFound} />
      <Route
        path="/crear_producto"
        exact
        component={isAdmin ? CrearProducto : NotFound}
      />
      <Route
        path="/edita_producto/:id"
        exact
        component={isAdmin ? CrearProducto : NotFound}
      />
      <Route
        path="/crear_categoria"
        exact
        component={isAdmin ? CrearCategoria : NotFound}
      />
      <Route path="*" exact component={NotFound} /> 
    </Switch>
  );
};
