import React, {useContext, useEffect, useState} from "react";
import { GlobalContext } from '../GlobalContext';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const Grid = styled.div`
  padding-top: 32px;
`
const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &::after{
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
const Imges = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute; 
`

export const Favoritos = () => {
  const state = useContext(GlobalContext)
  const [productos] = state.ProductosAPI.productos
  const [isIds] = state.UserAPI.isIds;
  const [favorito, setFavorito] = useState([])
  const [callback] = state.ProductosAPI.callback
 

  useEffect(() =>{
    
    productos.forEach(producto => {
        const check = producto.userLike.every((item) =>{
          return item !== isIds
        })

        if(!check){
          setFavorito(favorito => [...favorito, producto ])
        }
    });
  }, [isIds, productos, callback])

  
  return (
    <>
      <h1> Favoritos </h1>
      <Grid>
          {
            favorito.map(fav => (
              <Link key={fav._id} to={`/detail/${fav._id}`} >
                <Imges src={fav.images.url} />
              </Link>
            ))
          }
      </Grid>
    </>
  );
};
