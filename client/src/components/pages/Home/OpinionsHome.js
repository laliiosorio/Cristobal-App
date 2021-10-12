import { Col, Row } from 'react-bootstrap'
import person from './adrian.png'


export default function OpinionsHome() {
    return (
        <section className='opinion-home'>
            <Row>
                <Col sm={1} md={12}>
                    <h5>No estas sólo - Lo que dicen de nosotros estudiantes como tú</h5>
                    <div className='comment'>
                        <div className='datos-comment'>
                            <img src={person} alt='person icon' />
                            <div className='person-data'>
                                <h6>Andrian Summer</h6>
                                <p>Beca MEC</p>
                            </div>
                        </div>
                        <p>Gracias a vosotros encontré una beca con la que me pude pagar mi último año de carrera.</p>
                    </div>
                </Col>
            </Row>
        </section >
    )
}