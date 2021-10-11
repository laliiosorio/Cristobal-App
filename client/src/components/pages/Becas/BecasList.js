import React, { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'


export default function BecasList() {

    const { user } = useContext(UserContext)


    return (
        <Col md={4} className="mb-3">
            <h1>Aquí tienes tus becas:</h1>
            <div>
                <h6></h6>
                <p></p>
            </div>
        </Col>
    )
}