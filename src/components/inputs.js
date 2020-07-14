import React from 'react'

export const Inputs=(props)=>{
    return <>
        <form className={props.id}>
            <div class="form-group">
                <label className="ml-3 font-weight-bold">{props.text} </label><br></br>
                <input onChange={props.function} type="text" className={props.class} id={props.id} placeholder={props.text}/>
                <small id="emailHelp" className=" ml-3 form-text text-muted">Aqui aparece algun error cuando algo va mal</small> 
            </div>
        </form>
    </>
}