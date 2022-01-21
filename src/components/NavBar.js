import { Navbar,Nav,Container } from "react-bootstrap"
const NavBar = ({game}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">GamesIITBBS</Navbar.Brand>
                <Nav>
                    <Nav.Link href={`/${game}-matches/`}>matches</Nav.Link>
                    <Nav.Link href={`/${game}-tournaments`}>tournaments</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                    <Nav.Link href="/contact-us">contact us</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar