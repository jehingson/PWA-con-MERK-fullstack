import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import  styled from 'styled-components';
import axios from "axios";
import {Uploadss} from '../components/FormSubir/Upload'

const Catgory = styled.div`
	width: 100%;
	padding-bottom: 150px;	
`
const Form = styled.form`
	width: 100%;
	margin-bottom: 20px;
`
const Grid = styled.div`
	display: flex;
	padding-top: 10px;
`
const Label = styled.label`
	display: block;
	margin-bottom: 10px;
	margin-left: 10px;
`
const Button= styled.button`
		height: 30px;
		width: 20%;
		color: white;
		background: #5858FA;
		margin: 0 10px;
		border: none;
		outline: 0;
`
const Input = styled.input`
	width: 80%;
	margin-left: 10px;
	border: 1px solid #ccc;
`
const Row = styled.div`
	min-width: 290px;	
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
	margin: 10px;
	box-shadow: 0 10px 14px rgba(0, 0, 0, .1);
`

const Img = styled.img`
	width: 90px;
	height: 90px;
	object-fit: contain;
	display: block;
	border-radius: 50%;
	border: 1px solid #ccc;
`

const Btn = styled.button`
	padding: 3px 5px;
	margin-right: 3px;	
	background: #5858FA;
	color: white;	
	#dele{
		background: #FE2E9A;
	}
`

export const CrearCategoria = () => {
	const state = useContext(GlobalContext)
	const [token] = state.token
	const [isAdmin] = state.UserAPI.isAdmin
	const [category] = state.CategoriaAPI.category
	const [categoria, setCategoria] = useState('')
	const [callback, setCallback] = state.CategoriaAPI.callback
	const [id, setID] = useState('')
	const [onEdit, setOnEdit] = useState(false)
	const [images, setImages] = useState(false)
	const [Error, setError] = useState(false)

	const createCategoria = async (e) =>{
		e.preventDefault()
		console.log(categoria, images)
		try {
				if (!isAdmin) return setError("No eres un administrador")

				if(!images) return setError("No hay imagen de categoría")

				if(onEdit){
					const res = await axios.put(`/api/category/${id}`, {name: categoria, avatar: images},{
						headers: {Authorization: token}
					})
					alert(res.data.msg)
					setCallback(!callback)
				}else{
					const res = await axios.post('/api/category', {name: categoria, avatar: images},{
						headers:{Authorization: token}
					})
					alert(res.data.msg)
					setCategoria('')
					setCallback(!callback)
				}
		} catch (err) {
			alert(err.data.msg)
		}
	}

	const editarCategory = async (id, name, avatar) => {
		setID(id)
		setCategoria(name)
		setImages(avatar)
		setOnEdit(true)
	}

	const deleteCategory = async (id, public_id) =>{
		try {
			const res = await axios.delete(`/api/category/${id}`,{
				headers: {Authorization: token}
			})
			 await axios.post('/api/destroy', {public_id},{
				headers: {Authorization: token}
			})
			alert(res.data.msg)
			setCallback(!callback)
		} catch (err) {
			alert(err.response.data.msg)
		}
	}

  return (
    <Catgory>
			<Uploadss 
        images={images} 
        setImages={setImages} 
        isAdmin={isAdmin} 
        token={token}
        />
			{Error && <span>{Error}</span>} 
      <Form onSubmit={createCategoria}>
				<Label htmlFor="categoria"><h2>Categoría</h2></Label>
				<Grid>
					<Input
						type="text"
						name="category"
						value={categoria}
						required
						onChange={e => setCategoria(e.target.value)}
					/>
					<Button type="submit">{onEdit ? "Editar" : "Guardar"}</Button>
				</Grid>
			</Form>

			<div>
				{
					category.map(categori => (
						<Row key={categori._id}>
							<Img src={categori.avatar.url} />

							<p>{categori.name}</p>
							<div>
								<Btn onClick={() => editarCategory(categori._id, categori.name, categori.avatar)}>
									Editar
								</Btn>
								<Btn id="dele" onClick={() => deleteCategory(categori._id, categori.avatar.public_id)}>
									Eliminar
								</Btn>
							</div>
						</Row>
					))
				}
			</div>
    </Catgory>
  );
};
