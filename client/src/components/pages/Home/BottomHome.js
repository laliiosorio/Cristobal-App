import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './granted.svg'


export default function BottomHome() {
    return (
        <Container fluid className='bottom-box'>
            <Row>
                <Col sm={1} md={12}>
                    <div className='bottom-data'>
                        <img src={logo} alt='logo icon' />
                        <p>Elige tu futuro</p>
                        <Link className='btn btn-white' to='/becas/encontrar-becas'>ENCUENTRA MI BECA</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}