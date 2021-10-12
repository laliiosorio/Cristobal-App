import { Col, Row } from 'react-bootstrap'
import elbecador from './elbecador.svg'
import becasEstudio from './becas-estudio.svg'
import elpais from './elpais.svg'
import dudasmecd from './dudasmecd.svg'



export default function BrandsHome() {
    return (
        <section className='brand-home'>
            <Row>
                <Col sm={1} md={12}>
                    <h5>Hablan de nosotros</h5>
                    <div className='brands-box'>
                        <img src={elbecador} alt='upload icon' />
                        <img src={becasEstudio} alt='upload icon' />
                        <img src={elpais} alt='upload icon' />
                        <img src={dudasmecd} alt='upload icon' />
                    </div>

                </Col>
            </Row>
        </section>
    )
}