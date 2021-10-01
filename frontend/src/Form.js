import React, { useState } from "react";
import api from './services/api'
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  
    function handleSubmit(e) {
        e.preventDefault()
        api.post('/users', { name, email })
    }

    function drawFriends(){
        api.post('/draws', { })
    }

    return(
        <div className="row">
            <div className="d-flex justify-content-center ">
                <form onSubmit={ e => handleSubmit(e)}>
                    <div className="form-group mt-2 mb-3">
                        <label htmlFor="inputname">Nome do Amigo</label>
                        <input
                            name="name"
                            className="form-control"
                            id="inputname"
                            placeholder="Amigo"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />                      
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">E-mail do Amigo</label>
                        <input
                            name="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="amigo@secreto.com"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />                        
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-primary mr-4" type="submit"> Novo Amigo </button>
                        <button className="btn btn-success" style={{marginLeft: '1.4rem'}} onClick={drawFriends}> Sortear </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Form;