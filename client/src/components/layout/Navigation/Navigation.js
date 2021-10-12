import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from './logo-cristobal.svg'
import icon from './toggle-menu.svg'
import './Navigation.css'


const Navigation = () => {


    return (
        <Navbar collapseOnSelect expand='lg'>
            <Container>
                <Navbar.Brand href='/'><img className='logo' src={Logo} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' >
                    <img className='icon' src={icon} alt='icon' />
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link eventKey={2} href='/becas/encontrar-becas' className='menu-nav'>
                            Buscar Becas
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation