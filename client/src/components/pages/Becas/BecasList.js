import React, { useContext, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import data from '../../data/becasData'




export default function BecasList() {

    const { user, userApi } = useContext(UserContext)
    const [stateApto, setStateApto] = useState(undefined)

    function age(birthday) {
        birthday = new Date(birthday)
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0)
    }

    const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase()

    // const users = data




    return (
        <Col md={4} className="mb-3">
            <h1>Aquí tienes tus becas: {userApi?.name}</h1>
            {data.map((becas, idx) => {

                const { Name, minimumAge, province, minimumMark } = becas

                const validateBecas = (idx) => {
                    switch (idx) {
                        case 0:
                            return ((age(user?.birth) >= minimumAge) && (province == capitalized(user?.formData.community))) ? <p className='alert'>apto</p> : <p className='alert'>No apto</p>
                            break;
                        case 1:
                            return ((age(user?.birth) >= minimumAge) && (province == capitalized(user?.formData.community))) ? <p className='alert'>apto</p> : <p className='alert'>No apto</p>
                            break;
                        case 2:
                            return ((user?.formData.gradesAverage >= minimumMark) && (province == capitalized(user?.formData.community))) ? <p className='alert'>apto</p> : <p className='alert'>No apto</p>
                            break;
                        case 3:
                            return ((user?.formData.gradesAverage >= minimumMark) && (province == capitalized(user?.formData.community))) ? <p className='alert'>apto</p> : <p className='alert'>No apto</p>
                            break;
                        default:
                    }
                }



                return (
                    <div key={Name}>
                        <h6>{Name}</h6>
                        {validateBecas(idx)}
                    </div>
                )
            })}

        </Col >
    )
}