import { Col, Row } from 'react-bootstrap'
import money from './money.svg'
import invesment from './invesment.svg'
import upload from './upload.svg'



export default function AboutHome() {
    return (
        <section className='about-home'>
            <Row>
                <Col sm={1} md={12}>
                    <h5>¿Cómo funciona?</h5>
                    <div className='steps'>
                        <img src={upload} alt='upload icon' />
                        <div className='steps-info'>
                            <h6>1.Rellena tus datos</h6>
                            <p>Con darnos tus algunos datos podemos ponernos a buscar por ti</p>
                        </div>
                    </div>
                    <div className='steps'>
                        <img src={money} alt='money icon' />
                        <div className='steps-info'>
                            <h6>2. Mira que becas tienes disponibles</h6>
                            <p>Hay becas de muchos tipos. Ya sean de trabajo o de dinero, encuentra la que mas te encaje.</p>
                        </div>
                    </div>
                    <div className='steps'>
                        <img src={invesment} alt='invesment icon' />
                        <div className='steps-info'>
                            <h6>3. Si quieres te la gestionamos</h6>
                            <p>Por una pequeña comisión te gestionamos el papeleo que requiere la beca.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section >

    )
}