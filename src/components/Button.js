import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export const Button=(props)=>{
    return <button onClick={props.function} type="button" className="btn btn-warning">Enviar formulario</button>
}