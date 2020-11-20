import React, {useContext} from "react";
import { UserForm } from "../components/UserFrom";
import { GlobalContext } from "../GlobalContext";

export const Usuario = () => {
	const state = useContext(GlobalContext)
	const setRegiste = state.UserAPI.register[1]
	const setLogin = state.UserAPI.login[1]
	const [error1] = state.UserAPI.error1
	const [error2] = state.UserAPI.error2
	const [disable] = state.UserAPI.disable

  const register= (input) => {
	setRegiste(input)
  };

  const iniciarSesion = input => {
	setLogin(input)
  }
  const names = true;
  return (
    <>
	 <UserForm onSubmit={iniciarSesion} title="Iniciar Sesion"  disabled={disable} error={error1} />

    <UserForm onSubmit={register} title="Register" disabled={disable} error={error2} names={names} />
    </>
  );
};
