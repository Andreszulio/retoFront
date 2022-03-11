import React, {useState, useEffect}from "react";
import axios from '../environment/axiosConfig';
import { urls } from '../environment/urls';
import { Link } from 'react-router-dom';

export default function Persona(){

    const[nombre, setNombre] = useState("");
    const[texto, setTexto] = useState("");
    const[idioma, setIdioma] = useState("");
    const[validator, validatorTexto] = useState("");

    const saludarFunction= () => {
        validatorTexto("saludarFunction")
        nombreValidator().then((response)=>{
            if(response.data){
                if(idioma==="Ingles"){
                    setTexto("Hello nigga " + nombre)
                }
                else{
                    setTexto("Hola parcero " + nombre)
                }
            }
            else{
                setTexto("");
                alert("esta persona no está en la base de datos");
            }
        })
    }

    const despedirFunction = () => {
        validatorTexto("despedirFunction")
        nombreValidator().then((response)=>{
            if(response.data){
                if(idioma==="Ingles"){
                    setTexto("Good bye " + nombre)
                }
                else{
                    setTexto("La buena parcero " + nombre)
                }
            }
            else{
                setTexto("");
                alert("esta persona no está en la base de datos");
            }
        })
    }

    const nombreFunction = () => {
        validatorTexto("nombreFunction")
        nombreValidator().then((response)=>{
            if(response.data){
                if(idioma==="Ingles"){
                    setTexto("My name is " + nombre)
                }
                else{
                    setTexto("Mi nombre es " + nombre)
                }
            }
            else{
                setTexto("");
                alert("esta persona no está en la base de datos");
            }
        })
    }

    const nombreValidator = () => {
        return axios.get(urls.nameValidator(nombre))
    }

    useEffect(() => {
        if(idioma!=""){
            if(validator==="saludarFunction"){
                saludarFunction();
            }
            else if(validator==="despedirFunction"){
                despedirFunction()
            }
            else if(validator==="nombreFunction"){
                nombreFunction()
            }
        }
    }, [idioma]);

    return (
        <>
            <h2>Saludos Inglés y Español</h2> 
            <label htmlFor="nombre">Nombre:</label>
            <input type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            <h3>Idioma</h3>
            <label>Inglés</label>
            <input type="radio"
            id=""
            name="idioma"
            value="Ingles"
            onChange={(e)=>setIdioma(e.target.value)}
            />
            <label>Español</label>
            <input type="radio"
            id=""
            name="idioma"
            value="Español"
            onChange={(e)=>setIdioma(e.target.value)}
            />
            <br/>
            <button onClick={saludarFunction}>Saludar</button>
            <br/>
            <button onClick={nombreFunction}>Nombre</button>
            <br/>
            <button onClick={despedirFunction}>Despedir</button>
            <p>{texto}</p>
            <p>¿No hay personas en la base de datos? Vamos a registarlas</p>
            
        </>
    )

    
}