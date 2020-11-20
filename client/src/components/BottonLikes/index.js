import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components';
import {MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';

const Button = styled.button`
    padding-top: 8px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    outline: 0;

    & svg{
        margin-right: 4px;
    }
`
export const BottonLikes = ({producto}) => {
    const state = useContext(GlobalContext)
    const [token] = state.token
    const [callback, setCallback] = state.ProductosAPI.callback
    const [isIds] = state.UserAPI.isIds
    const [isAuth] = state.UserAPI.isAuth
    const {likes, userLike} = producto
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        let valor = 0;
        userLike.forEach((element) =>{
            if(element !== isIds){
                valor= valor+0
            }else{
                valor = valor + 1;
            }
        })
        if(valor > 0){
            setLiked(true)
        }else{
            setLiked(false)
        }
    },[userLike, isIds])

    const addLikes = async (producto) => {
        if(!isAuth) return null
        console.log(token)
        await axios.patch("/user/likes", {...producto}, {
          headers: { Authorization: token },
        })
        setCallback(!callback)
      }

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <>
        <Button onClick={() => addLikes(producto) } >
            <Icon size="30px" /> {likes} Likes!
        </Button>
       
        </>
    )
}
