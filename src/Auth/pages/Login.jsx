import { useState } from "react";
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../context/Authcontext"
import Cookies from 'universal-cookie';
import axios from 'axios'


export default function (props) {

  const { login } = useContext(Authcontext)
  const navigate = useNavigate();


  const baseUrl = "http://192.168.1.17:80";
  const cookies = new Cookies();

  const [form, setForm] = useState({
    UsuCuenta: '',
    UsuPass: ''
  })

  const onlogin=(user)=>{
    login(user);
    navigate('/home',{
      replace:true
    });
  }

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
    
  }

  const iniciarSesion = (e) => {
    e.preventDefault();
    const data={Usu_Cuenta: form.UsuCuenta, Usu_Password:form.UsuPass}
    
    axios.post(baseUrl,data)
    .then((response)=>{
      if(response.data.length==0){
        window.alert("Usuario o contraseña equivocado");
      } else{
        onlogin(response.data[0]["Usu_Cuenta"])
      }
      
      
      
    })
    
  
  }


  return (
    <div className="mx-auto center w-25 p-3 Auth-form-container ">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="text-center Auth-form-title">Iniciar sesión</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ingrese usuario"
              name="UsuCuenta"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese contraseña"
              name="UsuPass"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary"
              onClick={iniciarSesion}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

