import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Subir = styled.div`
  max-width: 450px;
  min-height: 300px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 20px;
  position: relative;
  border-radius: 10px;
`;

const Inputfile = styled.input`
  position: relative;
  width: 100%;
  height: 270px;
  outline: none;

  &::before {
    content: "+";
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: white;
    color: rgba(250, 200, 107);
    font-size: 14rem;
    text-align: center;
    cursor: pointer;
    margin: auto;
  }
`;

const DivImgs = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
`;

const Imgs = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2); 
  border-radius: 10px;
`;
const Span = styled.span`
  position: absolute;
  top: -13px;
  right: -13px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 900;
  color: crimson;
`;

export const Uploadss = ({ isAdmin, token, images, setImages, setError }) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubir = async (e) => {
    e.preventDefault();
    
    try {
      
      if (!isAdmin) return setError("No eres Adminitrados");
      
      const file = e.target.files[0]

      if (!file) return setError("Archivo no existente");
        
      if (file.size > 1024 * 1024) return setError("Solo archivo menor a 1024*1024");
        
      if (file.type !== "image/jpeg" && file.type !== "image/png") return setError("El formato del archivo es incorrecto!");
   
      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await Axios.post(
        "/api/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      setLoading(false);
      setImages(res.data)
      
    } catch (err) {
      setError(err.response.data.msg)
    }
  };

  const handleDestroy = async () =>{
    try{
      if(!isAdmin) return setError("No eres Adminitrados")
      setLoading(true)
      await Axios.post('/api/destroy', 
      {public_id: images.public_id},{
        headers: {Authorization: token}
      })
      setLoading(false)
      setImages(false)
    }catch(err){
      setError(err.response.data.msg)
    }
  }

  const styleSubir = {
    display : images ? "block" : "none"
  }

  return (
    <>
      <Subir>
        <Inputfile type="file" name="file" onChange={handleSubir} />
        {loading ? (
          <DivImgs>Cargando..</DivImgs>
        ) : (
          <DivImgs style={styleSubir}>
            <Imgs src={images ? images.url : ''} />
            <Span onClick={handleDestroy}>x</Span>
          </DivImgs>
        )}
      </Subir>
    </>
  );
};
