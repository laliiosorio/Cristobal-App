import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Row, Col } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import { getDate } from '../../../Utils'
import './BecasForm.css'


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
    }, [date.day, date.month, date.year])

    const buttonDisabled = () => {
        return !(date.day && formData.gradesAverage)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUser({ birth, formData })
        history.push('/becas/validar-mail')
        clearState()
    }


    return (
        <section className='becas-form'>
            <Row>
                <Col sm={1} md={12}>
                    <h6>Para decirte que becas tienes disponible nos hace falta saber un poco más de ti</h6>
                    <Form onSubmit={handleSubmit} className='group-info'>
                        <Form.Group className='block-form' controlId='birth'>
                            <div className='date-info'>
                                <Form.Label>¿Cuándo naciste? </Form.Label>
                                <p>¡Te felicitaremos por tu cumpleaños!</p>
                            </div>
                            <div className='date-inputs'>
                                <Form.Control className='date' onChange={e => handleChangeD(e)} name='day' value={date.day} type='number' min='1' max='31' placeholder='DD' />
                                <Form.Control className='date' onChange={e => handleChangeD(e)} name='month' value={date.month} type='number' min='1' max='12' placeholder='MM' />
                                <Form.Control className='date' onChange={e => handleChangeD(e)} name='year' value={date.year} type='number' min='1900' max='2021' placeholder='YYYY' />
                            </div>
                        </Form.Group>

                        <Form.Group className='block-form' controlId='nationality'>
                            <Form.Label>¿Cuál es tu nacionalidad? </Form.Label>
                            <div className='text-inputs'>
                                <Form.Control className='input-style' onChange={e => handleChange(e)} name='nationality' value={formData.nationality} type='text' placeholder='Española' />
                            </div>
                        </Form.Group>

                        <Form.Group className='block-form' controlId='community'>
                            <Form.Label>¿En qué Comunidad Autónoma vives? </Form.Label>
                            <div className='text-inputs'>
                                <Form.Control className='input-style' onChange={e => handleChange(e)} name='community' value={formData.community} type='text' placeholder='E.g. Cataluña' />
                            </div>
                        </Form.Group>

                        <Form.Group className='block-form' controlId='gradesAverage'>
                            <div className='date-info'>
                                <Form.Label>Con una nota media de </Form.Label>
                                <p>Dinos tu nota sobre 10</p>
                            </div>
                            <div className='text-inputs'>
                                <Form.Control className='input-style' onChange={e => handleChange(e)} name='gradesAverage' value={formData.gradesAverage} type='number' placeholder='E.g. 10' />
                            </div>
                        </Form.Group>

                        <Button className='btn btn-purple' type='submit' disabled={buttonDisabled()}>SIGUIENTE</Button>
                    </Form>
                </Col>
            </Row>
        </section>
    )
}

