import React, { Component, useEffect, useState } from "react";
import api from './services/api'


function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        api
            .post("/users",{
                name: name,
                email: email
            })
            .then((response) => createUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro!" + err)
            })
    }, [])

    return(
        <div className="row">
            <div className="d-flex justify-content-center ">
                <form>
                    <div className="form-group mt-2 mb-3">
                        <label for="inputname">Nome do Amigo</label>
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
                        <label for="inputEmail">E-mail do Amigo</label>
                        <input
                            name="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="amigo@secreto.com"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />                        
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="btn btn-primary" onClick={event => setFriend(name, email)}> Novo Amigo </div>
            </div>
        </div>
    )
}

export default Form;