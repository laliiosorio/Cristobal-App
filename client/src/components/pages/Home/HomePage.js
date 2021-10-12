import { Container } from 'react-bootstrap'
import AboutHome from './AboutHome'
import BottomHome from './BottomHome'
import BrandsHome from './BrandsHome'
import HeaderHome from './HeaderHome'
import OpinionsHome from './OpinionsHome'
import './HomePage.css'




export default function HomePage() {
    return (
        <Container >
            <HeaderHome />
            <AboutHome />
            <OpinionsHome />
            <BrandsHome />
            <BottomHome />
        </Container>
    )
}