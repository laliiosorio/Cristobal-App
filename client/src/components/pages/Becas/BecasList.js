import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import data from '../../data/becasData'
import { age, capitalized } from '../../../Utils'
import './BecasList.css'





export default function BecasList() {

    const { user, userApi } = useContext(UserContext)

    return (
        <section className='becas-list'>
            <Col sm={1} md={12}>
                <h1>Aquí tienes tus becas: <br /> {userApi?.name}</h1>
                {data.map((becas, idx) => {

                    const { Name, minimumAge, province, minimumMark } = becas

                    const validateBecas = (idx) => {
                        switch (idx) {
                            case 0:
                                return ((age(user?.birth) >= minimumAge) && (province === capitalized(user?.formData.community))) ? <p className='apto'>Apto</p> : <p className='no-apto'>No apto</p>
                            case 1:
                                return ((age(user?.birth) >= minimumAge) && (province === capitalized(user?.formData.community))) ? <p className='apto'>Apto</p> : <p className='no-apto'>No apto</p>
                            case 2:
                                return ((user?.formData.gradesAverage >= minimumMark) && (province === capitalized(user?.formData.community))) ? <p className='apto'>Apto</p> : <p className='no-apto'>No apto</p>
                            case 3:
                                return ((user?.formData.gradesAverage >= minimumMark) && (province === capitalized(user?.formData.community))) ? <p className='apto'>Apto</p> : <p className='no-apto'>No apto</p>
                            default:
                        }
                    }

                    return (
                        <div className='becas-card' key={Name}>
                            <h6>{Name}</h6>
                            {validateBecas(idx)}
                        </div>
                    )
                })}

            </Col >
        </section>
    )
}