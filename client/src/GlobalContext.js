import React, { createContext, useEffect, useState } from "react";
import CategoriaAPI from './api/CategoriaAPI';
import ProductosAPI from './api/ProductosAPI';
import UserAPI from './api/UserAPI';
import axios from "axios";


export const GlobalContext = createContext();

export const DataProvider = ({ children }) => {
	
  const [token, setToken] = useState(false);	

	useEffect(()=>{
		const session =  window.sessionStorage.getItem('Session', true)
		if(session){
			const refreshToken = async () =>{
				const res = await axios.get('/user/refresh_token')
					if(res.data){setToken(res.data.accesstoken)}
			}
			refreshToken()
			setTimeout(() =>{
				refreshToken()
			}, 10*60*1000)
		}
	},[])

	
	const state = {
		token: [token, setToken],
		CategoriaAPI: CategoriaAPI(),
		ProductosAPI: ProductosAPI(),
		UserAPI: UserAPI(token)
	}
	

	return(
		<GlobalContext.Provider value={state}>
			{children}
		</GlobalContext.Provider>
	)
};
