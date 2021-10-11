import { Col, Row } from 'react-bootstrap'


export default function AboutHome() {
    return (
        <section>
            <Row>
                <Col sm={1} md={12}>
                    <h5>¿Cómo funciona?</h5>
                    <div>
                        <div>
                            <h6>1.Rellena tus datos</h6>
                            <p>Con darnos tus algunos datos podemos ponernos a buscar por ti</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6>2. Mira que becas tienes disponibles</h6>
                            <p>Hay becas de muchos tipos. Ya sean de trabajo o de dinero, encuentra la que mas te encaje.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6>3. Si quieres te la gestionamos</h6>
                            <p>Por una pequeña comisión te gestionamos el papeleo que requiere la beca.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section >

    )
}