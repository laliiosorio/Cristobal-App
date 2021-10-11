import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AboutHome from './AboutHome'
import BottomHome from './BottomHome'
import BrandsHome from './BrandsHome'
import HeaderHome from './HeaderHome'
import OpinionsHome from './OpinionsHome'




export default function HomePage() {
    return (
        <Container>
            <HeaderHome />
            <AboutHome />
            <OpinionsHome />
            <BrandsHome />
            <BottomHome />
        </Container>
    )
}