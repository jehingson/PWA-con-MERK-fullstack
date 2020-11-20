import React, { useContext} from "react";
import { GlobalContext } from "../GlobalContext";
import { FormSubir } from "../components/FormSubir";


export const CrearProducto = () => {
  const state = useContext(GlobalContext);
  const [isAdmin] = state.UserAPI.isAdmin;
  const [token] = state.token


  return (
    <div>
      <FormSubir  isAdmin={isAdmin} token={token} />
    </div>
  );
};
