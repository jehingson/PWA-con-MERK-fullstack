import React, {useContext} from 'react'
import { SubmitButton } from '../components/SubmitButton'
import axios from "axios";

export const User = () => {
    const removeAuth = async () =>{
        await axios.get('/user/logout')
        window.sessionStorage.removeItem('Session')
        window.location.href = '/'
    }
    return (
        <>
            <h1>Usuario</h1>
            <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>

        </>
    )
}

