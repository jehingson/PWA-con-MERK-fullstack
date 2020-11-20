import React, { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { ProductoCard } from "../components/ProductoCard";
import  PropTypes from "prop-types";

export const Detail = () => {
  const params = useParams();
  const state = useContext(GlobalContext);
  const [productos] = state.ProductosAPI.productos;
  const [productoDetail, setProductoDetail] = useState([]);

  useEffect(() => {
    if((params.id )&& (productos.length > 0)){
      productos.forEach( producto => {

        if ( producto._id ===  params.id  ) setProductoDetail(producto) 
      })
    }
  }, [params.id, productos]);

  if (productoDetail.length === 0) return null;

  return (
    <>
      <ProductoCard producto={productoDetail} />
    </>
  );
};

Detail.prototype = {
  productos : PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  )
}