import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export const Select=(props)=>{
    return <>
    
        <Col xs="3" >
            <div className="input-group ml-3 mb-3 mr-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">{props.item}</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Escoge dia</option>
                    <option value="1">One</option>
                </select>
            </div>  
        </Col>
    </>
}