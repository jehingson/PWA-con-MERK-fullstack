import React, {useContext} from "react";
import { Context } from '../context/Context';
import {  Userform } from "../componets/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";


export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
    <RegisterMutation>
      {
        (register,{data={}, loading, error}) => {

            const onSubmit = ({email, password}) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(response => {
                const { signup } = response.data;
                activateAuth(signup)
              })
            }

          const erroMsg = error && 'El usuario ya existe o hay algún problema!'

          return <Userform disabled={loading} error={erroMsg} title='Registrar' onSubmit = {onSubmit}/>
        }
      }
    </RegisterMutation>

    <LoginMutation>
      {
        (login, {data, loading, error}) => {
          const onSubmit = ({email, password}) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(response => {
              const {login} =  response.data
              activateAuth(login)
            })
          }

          const erroMsg = error && 'La contraseña es incorrecta o el usuario no existe!'
          return <Userform disabled={loading} error={erroMsg} title='Inciar Sesion' onSubmit = {onSubmit}/>
        }
      }
    </LoginMutation>
    </>
  );
}
  