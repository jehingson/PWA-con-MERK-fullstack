import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../GlobalContext";

function UserAPI(token) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(false)
  const state = useContext(GlobalContext)
  const { isAuth } = state;
  const [token] = state.token;
  const 
  

  const addCart = async (producto) => {

    if(!isAuth) return setError("Por favor inicie sesion para continuar")

    const check = cart.every((item) => {
      return item.id !== producto._id;
    });
    if (check) {
      setCart([...cart, {...producto, quantity: 1 }]);

      await axios.patch("/user/addcart",
        { cart: [...cart, { ...producto, quantity: 1 }] },
        {
          headers: { Authorization: token },
        }
      );
    }else{
      setError("Este producto ya ha sido añadico al carrito")
    }
  };

  return {
    cart: [cart, setCart],
    error: [error, setError]
  }
}
