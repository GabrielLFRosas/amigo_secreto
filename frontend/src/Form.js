import React, { useState } from "react";
import api from './services/api'
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
  
    function handleSubmit(e) {
        e.preventDefault()
    }

    function drawFriends(){
        api.post('/draws', { })
            .then(listUsers())
    }

    function createUser(){
        api.post('/users', { name, email })
            .then(listUsers())
    }

    async function listUsers(){
        const users = await api.get('/users')
        setUsers(users.data)
    }
    
    return(
        <div className="row">
            <div className="col-sm-5">
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
                            <button className="btn btn-primary mr-4" type="submit" onClick={createUser}> Novo Amigo </button>
                        <button className="btn btn-success" style={{marginLeft: '1.4rem'}} onClick={drawFriends}> Sortear </button>

                        </div>

                    </form>
                </div>
            </div>
            <div className="col-sm-6">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Friend ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.friend_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form;