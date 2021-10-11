import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap'
import UserService from '../../../services/user.service'
import './ValidateMail.css'


const userService = new UserService()

export default function ValidateMail() {

    const [users, setUsers] = useState(undefined)
    const [mail, setMail] = useState('')
    const [error, setError] = useState(undefined)


    let history = useHistory()

    const clearState = () => {
        setMail('')
    }

    const getAllUsers = () => {
        userService
            .allUsers()
            .then(users => setUsers(users.data))
            .catch(() => setUsers(undefined))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        let timer
        if (error) {
            timer = setTimeout(() => setError(undefined), 3000)
        }
        return () => clearTimeout(timer);
    }, [error])

    const handleChange = (e) => {
        setMail(e.target.value)
    }

    const findUser = () => {
        users.find(elm => elm.email === mail ? (history.push("/becas/becas-opciones"), clearState()) : setError('El usuario NO existe'))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        findUser()
    }



    return (
        <>
            <Container>
                <h1>Hemos encontrado varias becas que te encajan</h1>
                <p>Regístrate para ver los resultados de la búsqueda</p>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="mail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => handleChange(e)} name="mail" value={mail} type="text" placeholder="E.g. manuel@gmail.com" />
                    </Form.Group>
                    {error && <p className='alert'>{error}</p>}

                    <Button variant="primary" type="submit">DIME MIS BECAS</Button>
                    <p>RECOMIENDANOS O SIGUE NUESTRO BLOG PARA MÁS INFO</p>
                </Form>
            </Container>
        </>
    )
}

