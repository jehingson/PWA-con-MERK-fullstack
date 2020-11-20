import React from 'react'
import { ListaCategory } from '../components/ListaCategory'
import { ListaProductos } from '../components/ListaProductos'

export const Home = () => {
	return (
		<>
			<ListaCategory />
			<ListaProductos />
		</>
	)
}
