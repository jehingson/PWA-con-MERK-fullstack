import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../GlobalContext';
import styled from 'styled-components';

const Card = styled.div`
	width: 100%;
	display: flex;
	height: 100px;
	justify-content: space-around;
	align-items: center;
	position: relative;
	transform: scaleY(0.98);
	overflow: hidden;
	box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
	box-sizing: border-box;	
	margin-top: 10px;
	border-radius: 5px;
`
const Img = styled.img`
	width: 90px;
	height: 90px;
	object-fit: contain;
	display: block;
	border-radius: 50%;
`
const Text = styled.div`
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5px;
	align-items: center;
`
const Title = styled.h2`
	font-size: 16px;
	max-width: 200px;
	padding-top: 3px;
	height: 74px;
	overflow: hidden;	
`

const Cantidad = styled.div`
	button{
		width: 15px;
		height: 15px;
		color: white;
		background: #5858FA;
	}
	#decre {
		background: #FE2E9A;
	}
	span{
		color: crimson;
		padding: 0 12px;
		font-weight: 700;
	}
`
const H3 = styled.h3`
	font-size: 16px;
	em{
		font-size:10px;
	}
`
const Produc = styled.h3`
	position: absolute;
	bottom: 0;
	left: 70px;
	font-size: 16px;
`
const Delete = styled.div`
	position: absolute;
	top: 0;
	right: 5px;
	color: crimson;
	font-weight: 900;
	cursor: pointer;
	box-shadow: 0 10px 14px rgba(0, 0, 0, .4);
`
const DivTotal = styled.div`
	padding: 40px 0 150px 0;
`

export const Carrito = () => {
	const state = useContext(GlobalContext)
	const [cart, setCart] = state.UserAPI.cart
	const [token] = state.token
	const [total, setTotal] = useState(0)



	useEffect(() =>{
		const getTotal = () => {
			const totall = cart.reduce((prev, item)=>{
				return prev + (item.price * item.quantity)
			}, 0)
			setTotal(totall)
		}
		getTotal()
	},[cart])

	const addToCart = async (cart) =>{
		await Axios.patch('/user/addcart', {cart},{
			headers: {Authorization: token}
		})
	}

	const increment = (id) =>{
		cart.forEach(item => {
			if(item._id === id){
				item.quantity +=1
			}
		})
		setCart([...cart])
		addToCart(cart)
		console.log('CARRITO',cart)
	}

	const decrement = (id) =>{
		cart.forEach(item => {
			if(item._id === id){
				item.quantity === 1 ? item.quantity = 1: item.quantity -=1;
			}
			setCart([...cart])
			addToCart(cart)
		})
	}

	const removeProducto = id => {
		if(window.confirm('¿Quieres suspender este producto?')){
			cart.forEach((item, index) => {
				if(item._id === id){
				cart.splice(index, 1)
			}
			})
			setCart([...cart])
			addToCart(cart)
		}
	}

	if(cart.length === 0) return <h2> Carrito Vacio</h2> 
		
    return (
        <div>
					 {
						 cart.map(producto => (
							 <Card key={producto.product_id}>
								 <Img src={producto.images.url} />
								 <Text>
									 <Produc>
											{producto.product_id}
									 </Produc>
									 <Title>{producto.title}</Title>
									<Cantidad>
										<button id="decre" onClick={()=> decrement(producto._id)}> - </button>
						 					<span>{producto.quantity}</span>	
										<button onClick={()=> increment(producto._id)}> + </button>
									</Cantidad>
									<H3>
										$ {producto.price * producto.quantity} <em>COP</em>
									</H3>
									<Delete onClick={() => removeProducto(producto._id)}>
										x
									</Delete>
								 </Text>
							 </Card>
						 ))
					 }
					 <DivTotal>
						<h3>Total: ${total}</h3>
					</DivTotal>
        </div>
    )
}
