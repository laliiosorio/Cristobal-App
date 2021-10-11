import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import { getDate } from '../../../Utils'


export default function BecasForm() {

    let history = useHistory()
    const { setUser } = useContext(UserContext)
    const [birth, setBirth] = useState(undefined)
    const [date, setDate] = useState({ day: '', month: '', year: '' })
    const [formData, setFormData] = useState({ nationality: '', community: '', gradesAverage: '' })


    const clearState = () => {
        setDate('')
        setBirth('')
        setFormData({ nationality: '', community: '', gradesAverage: '' })
    }

    const handleChange = e => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleChangeD = e => {
        const { value, name } = e.target
        setDate({ ...date, [name]: value })
    }

    useEffect(() => {
        if (date.day && date.month && date.year) {
            return setBirth(getDate(date.month, date.day, date.year))
        }
    })

    const buttonDisabled = () => {
        return !(date.day && formData.gradesAverage)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUser({ birth, formData })
        history.push("/becas/validar-mail")
    }


    return (
        <Container>
            <h6>Para decirte que becas tienes disponible nos hace falta saber un poco más de ti</h6>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="birth">
                    <div>
                        <Form.Label>¿Cuándo naciste? </Form.Label>
                        <span>¡Te felicitaremos por tu cumpleaños!</span>
                    </div>
                    <div>
                        <Form.Control onChange={e => handleChangeD(e)} name="day" value={date.day} type="number" min="1" max="31" placeholder="DD" />
                        <Form.Control onChange={e => handleChangeD(e)} name="month" value={date.month} type="number" min="1" max="12" placeholder="MM" />
                        <Form.Control onChange={e => handleChangeD(e)} name="year" value={date.year} type="number" min="1900" max="2021" placeholder="YYYY" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nationality">
                    <Form.Label>¿Cuál es tu nacionalidad? </Form.Label>
                    <Form.Control onChange={e => handleChange(e)} name="nationality" value={formData.nationality} type="text" placeholder="Española" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="community">
                    <Form.Label>¿En qué Comunidad Autónoma vives? </Form.Label>
                    <Form.Control onChange={e => handleChange(e)} name="community" value={formData.community} type="text" placeholder="E.g. Cataluña" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="gradesAverage">
                    <div>
                        <Form.Label>Con una nota media de </Form.Label>
                        <span>Dinos tu nota sobre 10</span>
                    </div>
                    <Form.Control onChange={e => handleChange(e)} name="gradesAverage" value={formData.gradesAverage} type="number" placeholder="E.g. 10" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={buttonDisabled()}>SIGUIENTE</Button>
            </Form>
        </Container>
    )
}

