import React, { useContext, useEffect}  from 'react'
import { GlobalContext } from '../../GlobalContext';
import { ProductoCard } from "../ProductoCard";
import {useParams} from 'react-router-dom'
import styled from 'styled-components';

const Error = styled.li`
position:fixed;
padding: 10px 15px;
border-radius: 15px;
top: 130px;
z-index: 100;
background: #fff;
`
const Ul = styled.ul`
  padding-bottom: 50px;
`

export const ListaProductos = () => {
  const state = useContext(GlobalContext)
  const [productos] = state.ProductosAPI.productos
  const [category, setCategory]= state.ProductosAPI.category
  const [error] = state.UserAPI.error1
  const params = useParams()

  useEffect(()=>{
    if(params.id){
      setCategory('category=' + params.id)
    }else{
      setCategory('')
    }
  },[params.id, category])

  if(!productos) return <div>Loading...</div>
  
  return (
    <Ul>
    { error && <Error> {error} </Error> }
      {
      productos.map((producto) => (
        <li key={producto._id}>
          <ProductoCard producto={producto} />
        </li>
      ))}
    </Ul>
  )
}

