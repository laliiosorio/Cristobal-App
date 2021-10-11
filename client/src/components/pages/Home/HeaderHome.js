import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HeaderHome() {
    return (
        <header>
            <Row>
                <Col sm={1} md={12}>
                    <h1>Encuentra una beca para tus estudios</h1>
                    <p>¿Quieres estudiar en cualquier sitio pero tienes probelmas financieros? Busca tu beca con Grantted</p>
                    <Link to='/becas/encontrar-becas'>ENCUENTRA MI BECA</Link>
                </Col>
            </Row>
        </header>
    )
}