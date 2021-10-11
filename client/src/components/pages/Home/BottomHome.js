import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function BottomHome() {
    return (
        <section>
            <Row>
                <Col sm={1} md={12}>
                    <img></img>
                    <p>Elige tu futuro</p>
                    <Link to='/becas/encontrar-becas'>ENCUENTRA MI BECA</Link>


                </Col>
            </Row>
        </section>
    )
}