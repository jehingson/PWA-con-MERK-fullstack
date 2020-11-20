import { useState, useEffect } from "react";
import axios from "axios";

function CategoriaAPI() {
  const [category, setCategory] = useState([]);
  const [callback, setCallback] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      axios.get( '/api/category')
      .then(response =>{
        if(response.data){
          setCategory(response.data);
        }else{
          console.log('Category next')
        }
        setLoading(false)
      })
  }, [callback]);

  return {
    category: [category, setCategory],
    callback: [callback, setCallback],
    loading: [loading]
    
  };
}

export default CategoriaAPI;
