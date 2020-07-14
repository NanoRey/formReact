import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Inputs } from './components/inputs';
import { Container, Row, Col,} from 'reactstrap';
import {CheckBox} from './components/CheckBox'
import {Select} from './components/Select'
import {Button} from './components/Button'

function App() {
  const [name,setName]=useState("Nombre");
  const [apellido,setApellido]=useState("Apellido");
  //const [sexo,setSexo]=useState("Sexo");
  //const [mail,setMail]=useState("Mail");
  //const [telf,setTelf]=useState("telf");
  //const [fechaNacimiento,setFechaNacimiento]=useState("21/09/1992");
  
  const HandleValidationName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
    return;
  }

  useEffect(() => {
    if (name.length<=3){
      console.log("Menos de 3 caracteres");
      return;
    }
    console.log("Mas de 3 caracteres");
  }, [name]);

  const HandleValidationApellido=(event)=>{
    event.preventDefault();
    setApellido(event.target.value)
    return;
  }
  
  const HandleObligatoryField=(event)=>{
    console.log(event.target.value)
    const field= (event.target.value.length<=0) ? "Este campo debe de ser rellenado" : "Campo rellenado correctamente"
    return field;
  }

  return <>
    <div className="App">
      <header>
        <h1>Formulario</h1>
      </header>
      <body>
        <Inputs function={HandleValidationName} text="Inserta nombre" class="ml-3 form-control" id="name" placeholder="Nombre"/>
        <Inputs function={HandleValidationApellido} text="Inserta apellidos" class="ml-3 form-control" id="Apellidos" placeholder="Apellidos"/>
        <Row className="mb-2 border-bottom ">
          <Select item="Dia"/>
          <Select item="Mes"/>
          <Select item="Año"/>
        </Row>
        <Row className="mb-2 border-bottom ">
          <CheckBox sex="Hombre"/>
          <CheckBox sex="Mujer"/>
        </Row>
        <Inputs text="Inserta mail" class="ml-3 form-control" id="mail" placeholder="mail"/>
        <Inputs text="Inserta telefono" class="ml-3 form-control" id="telefono" placeholder="+34 Telefono"/>
      </body>
        <Button function={HandleObligatoryField}/>
    </div>
    </>

}

export default App;
