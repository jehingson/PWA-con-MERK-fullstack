import React, { useContext, useState } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import styled from 'styled-components';
import axios from "axios";

const Div = styled.div`
    padding-top: 8px;
    display: flex;
    align-items: center;
    color: black;
    cursor: pointer;
    outline: 0;

    & svg{
        margin-right: 4px;
    }
`
const Link = styled(LinkRouter)`
  color: black;
  font-weight: 500;
  padding-right: 20px;
`

export const BottonRender = ({producto}) => {
		const state = useContext(GlobalContext)
		const [token] = state.token
    const [isAdmin] = state.UserAPI.isAdmin
		const addCart = state.UserAPI.addCart
		const [callback, setCallback] = state.ProductosAPI.callback
		const [loading, setLoading] = useState(false)

		const  deleteProducto = async (id, public_id) =>{
			try {
				setLoading(true)
				const destroImg = axios.post('/api/destroy', {public_id},{
					headers: {Authorization: token}
				})

				const deleteProducto = axios.delete(`/api/producto/${id}`,{
					headers: {Authorization: token}
				})

				await destroImg
				await deleteProducto
				setCallback(!callback)
				setLoading(false)
			} catch (err) {
				alert(err.response.data.msg)
			}
    }
    
    const Compartir = () =>{
      if(!navigator.share) {
      alert("Tu browser no soporta la web share API") 
      return;
      }
      console.log(producto.title, producto.description, document.location.href, producto.images.url)
      navigator.share({
        images: producto.images.url,
        title: `${producto.title}`,
        text: `${producto.description}`,
        url: document.location.href
      })
        .then(() => alert('Contenido Compartido'))
        .catch(() => {return null})
      }

		if(loading) return <div>Loading...</div>
    
    return (
        <div>
            {
                isAdmin 
                ?<Div> <Link to='#!' onClick={() => deleteProducto(producto._id, producto.images.public_id)} >
                  Eliminar
                  </Link> 
                  <Link to={`/edita_producto/${producto._id}`} >Editar</Link>
                   </Div>
                : <Div>
                  <Link to='#!' onClick={Compartir} >Compartir</Link>
                  <Link to='#!' onClick={() => addCart(producto)} >Comprar</Link>
                </Div>
            }
        </div>
    )
}
