import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export const CheckBox=(props)=>{
    return <>
        <Col xs="2" className="ml-4">
            <input type="radio" name="sexo" value={props.sex} className="ml-3 mr-4"></input>
            <label> {props.sex}</label><br></br>
        </Col>
        
    </>
}