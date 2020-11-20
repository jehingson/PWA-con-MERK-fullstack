import React, {useContext} from "react";
import styled from "styled-components";
import { MdHome, MdFavoriteBorder, MdPersonOutline, MdLibraryAdd, MdShoppingCart, MdPhotoFilter } from "react-icons/md";
import { Link as LinkRouter } from 'react-router-dom';
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

	&[aria-current]{
		color: #000;
		&::after{
			${fadeIn({time: '0.5s'})}
			content: '.';
			position: absolute;
			bottom: -2px;
			font-size: 34px;
		}
	}
`
const SIZE = '32px';

export const Navbar = () => {
	
	const state = useContext(GlobalContext)
  	const [isAdmin] = state.UserAPI.isAdmin

  return (
		<Nav>
			<Link to='/'><MdHome  size={SIZE} /></Link>
			{isAdmin
			?
			<>
			<Link to='/crear_categoria'><MdPhotoFilter size={SIZE} /></Link>
			<Link to='/crear_producto'><MdLibraryAdd size={SIZE} /></Link>
			</>
			:<Link to='/favoritos'><MdFavoriteBorder size={SIZE} /></Link>
			}
			<Link to='/carrito'><MdShoppingCart size={SIZE} /></Link>	
			<Link to='/usuario'><MdPersonOutline size={SIZE} /></Link>
		</Nav>
		);
};	
