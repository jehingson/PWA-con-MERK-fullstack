import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isIds, setIsIds] = useState('');
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [register, setRegister] = useState(false)
  const [login, setlogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [disable, setDisable] = useState(false)


  useEffect(()=>{
		function myFunction() {
      setTimeout(function(){ 
        setError1(false); 
        setError2(false); 
      }, 3000)
		}
		myFunction()
	},[error1])
  


  useEffect(() => {
		if(token){
		async function getAdmin(){
      try{
        const res = await axios.get('/user/infor', {
			  headers: {Authorization: token}
    })
      setIsAuth(true)
      setIsIds(res.data._id)

      res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
      setCart(res.data.cart)
     
		}catch(err){
      alert(err.response.data.msg)
    }
    }
    getAdmin()
	}
  },[token])


  useEffect(() =>{
		if(login.email){
      setDisable(true)
        axios.post('/user/login', {...login})
          .then(res =>{
            setDisable(false)
            window.sessionStorage.setItem('Session', true)
            window.location.href = "/"
          })
          .catch(err =>{
            setError1(err.response.data.msg)
				    setDisable(false)
          })
	  }
	},[login])
  
  useEffect(() =>{
		if(register.email){
      setDisable(true)
        axios.post('/user/register', {...register})
          .then(res =>{
            setDisable(false)
            window.sessionStorage.setItem('Session', true)
            window.location.href = "/"
          })
          .catch(err =>{
            setError1(err.response.data.msg)
				    setDisable(false)
          })
	  }
	},[register])
  
 
  
  const addCart = async (producto) => {

		if(!isAuth) return setError1("Por favor inicie sesion para continuar")
	
		const check = cart.every((item) => {
		  return item._id !== producto._id;
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
		  setError1("Este producto ya ha sido añadico al carrito")
		}
    };


    const removeAuth = async () => {
      await axios.get('/user/logout')
      window.sessionStorage.removeItem('Session')
      window.location.href = "/"
    }

return {
  isIds : [isIds],
  isAuth : [isAuth, setIsAuth],
  isAdmin: [isAdmin, setIsAdmin],
  login: [login, setlogin],
  register: [register, setRegister],
  cart: [cart, setCart],
  error1:[error1],
  error2: [error2],
  addCart: addCart,
  removeAuth: removeAuth,
  disable: [disable],
  history: [history, setHistory]
}
}

export default UserAPI