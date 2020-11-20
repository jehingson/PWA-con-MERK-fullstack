import React, {useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Uploadss } from "./Upload"
import { GlobalContext } from "../../GlobalContext";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const WrapperFrom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const Form = styled.form`
  width: 100%;
  margin: 15px 5px;
`
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: none;
`
const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  min-height: 130px;
  width: 100%;
  outline: none;
`

const Row = styled.div`
  width: 100%;
  margin: 15px 0;
`
const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  border: none;
  height: 32px;
  width: 100%;
  text-align: center;
  color: white;
`
const Select = styled.select`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  min-height: 36px;
`
const Error = styled.span`
  color: crimson;
  font-size: 14px;
`
const initialState = {
  product_id: "#11",
  title: "vamos bien",
  price: 0,
  description: "Lorem",
  content: "hola mundo",
  category: "",
  _id: "122",
};

export const FormSubir = ({isAdmin, token}) => {

const state = useContext(GlobalContext)
const [category] = state.CategoriaAPI.category
const [callback, setCallback] = state.ProductosAPI.callback
const [producto, setProducto] = useState(initialState)
const [productos] = state.ProductosAPI.productos

const history = useHistory()
const param = useParams()
const [images, setImages] = useState(false)
const [error, setError] = useState(false)
const [onEdit, setOnEdit] = useState(false)


  useEffect(()=>{
    setOnEdit(true)
    if(param.id){
      productos.forEach(produ =>{
        if(produ._id === param.id){
          setProducto(produ)
          setImages(produ.images)
        }
      })
    }else{
      setOnEdit(false)
      setProducto(initialState)
      setImages(false)
    }
  },[param.id, productos])

  const handleChandeInput = e =>{
    const {name, value} = e.target
    setProducto({...producto, [name]:value})
  }


  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      if (!isAdmin) return setError("No eres un administrador")

      if(!images) return setError("No hay imagen subida")

      if(onEdit){
        await Axios.put(`/api/producto/${producto._id}`,
        {...producto, images},{
          headers:{Authorization: token}
        })
      }else{
        await Axios.post('/api/productos', {...producto, images},{
          headers:{Authorization: token}
        })
      }
      setCallback(!callback)
      history.push("/")

    }catch(err){
      setError(err.response.data.msg)
    }
  }

  return (
    <WrapperFrom>
      
      <Uploadss 
        images={images} 
        setImages={setImages} 
        isAdmin={isAdmin} 
        token={token}
        setError={setError}
        />	
    {error && <Error>{error}</Error>} 
      <Form onSubmit={handleSubmit}>
        <Row>
          <label htmlFor="producto_id">Producto ID</label>
          <Input 
            type="text" 
            name="product_id" 
            required
            value={producto.product_id}
            onChange={handleChandeInput}
            disabled={onEdit}
            />
        </Row>
        <Row>
          <label htmlFor="title">Title</label>
          <Input 
            type="text" 
            name="title" 
            required
            value={producto.title}
            onChange={handleChandeInput}
            />
        </Row>
        <Row>
          <label htmlFor="price">Precio</label>
          <Input 
            type="Number" 
            name="price" 
            required
            value={producto.price}
            onChange={handleChandeInput}
            />
        </Row>
        <Row>
          <label htmlFor="category">Categoria</label>
          <br />
          <Select name="category" value={producto.category} onChange={handleChandeInput} >
            <option value=""> </option>
            {
              category.map(categor => (
                <option value={categor._id} key={categor._id} >
                  {categor.name}
                </option>
              ))
            }
          </Select>
        </Row>
        <Row>
          <label htmlFor="description">Descriccion</label>
          <Textarea 
            type="text" 
            name="description" 
            value={producto.description}
            onChange={handleChandeInput}
            />
        </Row>
        <Row>
          <label htmlFor="content">contenido</label>
          <Textarea 
            type="text" 
            name="content" 
            value={producto.content}
            onChange={handleChandeInput}
            />
        </Row>
        <br />
        <br />
        <br />
        <Button type="submit">{onEdit ? "Editar" : "Crear producto"}</Button>
      </Form>
    </WrapperFrom>
  );
};
