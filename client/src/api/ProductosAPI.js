import { useState, useEffect } from "react";
import axios from "axios";

function ProductoAPI() {
  const [productos, setProductos] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);


  useEffect(() => {
    const getProducto = async () => {
      const res = await axios.get(
        `/api/productos?limit=${page*9}&${category}&${sort}&title[regex]=${search}`);
      if(res.data){
        setProductos(res.data.products);
        console.log('producto', res.data.products)
        setResult(res.data.result);
      }else{
        console.log('Productos NEXT')
      }
    };
    getProducto();
  }, [callback, category, sort, search, page]);

  return {
    productos: [productos, setProductos],
    callback: [callback, setCallback],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult],
  };
}

export default ProductoAPI;
