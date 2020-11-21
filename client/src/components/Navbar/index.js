import React, {useContext, useEffect, useState} from "react";
import styled, {css} from "styled-components";
import { MdHome, MdFavoriteBorder, MdPersonOutline, MdLibraryAdd, MdShoppingCart, MdPhotoFilter } from "react-icons/md";
import { Link as LinkRouter} from 'react-router-dom';
import { fadeIn } from '../../styles/animation';
import { GlobalContext } from "../../GlobalContext";

const Nav = styled.nav`
	align-items: center;
	background: #fcfcfc;
	border-top: 1px solid #e0e0e0;
	bottom: 0;
	display: flex;
	height: 50px;
	justify-content: space-around;
	left: 0;
	margin: 0 auto;
	max-width: 500px;
	position: fixed;
	right: 0;
	width: 100%;
	z-index: 100;
`
const Link = styled(LinkRouter)`
	align-items: center;
	color: #888;
	display: inline-flex;
	height: 100%;
	justify-content: center;
	text-decoration: none;
	width: 100%;

	${props => props.fixed && css`
		color: #000;
		&::after{
			${fadeIn({time: '0.5s'})}
			content: '.';
			position: absolute;
			bottom: -2px;
			font-size: 34px;
		}`
		}
		`
const SIZE = '32px';

export const Navbar = () => {
	const state = useContext(GlobalContext)
	const [isAdmin] = state.UserAPI.isAdmin
	const [callback, setCallback] = useState(false)
	const [fixed, setFixed] = useState('')
	const [fixed0, setFixed0] = useState('')
	const [fixed1, setFixed1] = useState('')
	const [fixed2, setFixed2] = useState('')
	const [fixed3, setFixed3] = useState('')
	const [fixed4, setFixed4] = useState('')
	
	

	useEffect(() =>{
		console.log(window.location.pathname)
		console.log(window)
		switch(window.location.pathname) {
			case '/':
				efectoColor('home')
			  break;
			case '/crear_categoria':
				efectoColor('categoria')
			  break;
			  case '/crear_producto':
				efectoColor('producto')
			  break;
			  case '/favoritos':
				efectoColor('favoritos')
			  break;
			  case '/carrito':
				efectoColor('carrito')
			  break;
			  case '/usuario':
				efectoColor('usuario')
			  break;
			default:
				setFixed('')
				setFixed0('')
				setFixed1('')
				setFixed2('')
				setFixed3('')
				setFixed4('')
		  }
	},[window.location.pathname, callback])


	const efectoColor = (validar) => {
		if(validar === 'home'){
			setFixed('activo')
			setFixed0('')
			setFixed1('')
			setFixed2('')
			setFixed3('')
			setFixed4('')
		}
		if(validar === 'categoria'){
			setFixed0('activo')
			setFixed('')
			setFixed1('')
			setFixed2('')
			setFixed3('')
			setFixed4('')
		}
		if(validar === 'producto'){
			setFixed1('activo')
			setFixed0('')
			setFixed('')
			setFixed2('')
			setFixed3('')
			setFixed4('')
		}if(validar=== 'favoritos'){
			setFixed2('activo')
			setFixed0('')
			setFixed1('')
			setFixed('')
			setFixed3('')
			setFixed4('')
		}if(validar === 'carrito'){
			setFixed3('activo')
			setFixed0('')
			setFixed1('')
			setFixed2('')
			setFixed('')
			setFixed4('')
		}if(validar === 'usuario'){
			setFixed4('activo')
			setFixed0('')
			setFixed1('')
			setFixed2('')
			setFixed3('')
		}
	}
 
  return (
		<Nav>
			<Link to='/' fixed={fixed} onClick={()=> setCallback(!callback)}><MdHome  size={SIZE} /></Link>
			{isAdmin
			?
			<>
			<Link fixed={fixed0} to='/crear_categoria' onClick={()=> setCallback(!callback)}><MdPhotoFilter size={SIZE} /></Link>
			<Link fixed={fixed1} to='/crear_producto' onClick={()=> setCallback(!callback)}><MdLibraryAdd size={SIZE} /></Link>
			</>
			:<Link fixed={fixed2} to='/favoritos' onClick={()=> setCallback(!callback)}><MdFavoriteBorder size={SIZE} /></Link>
			}
			<Link fixed={fixed3} to='/carrito' onClick={()=> setCallback(!callback)}><MdShoppingCart size={SIZE} /></Link>	
			<Link fixed={fixed4} to='/usuario' onClick={()=> setCallback(!callback)}><MdPersonOutline size={SIZE} /></Link>
		</Nav>
		);
};	
