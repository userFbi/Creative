import Layout from './Layout'
import { Navbar, Nav, Container } from "react-bootstrap";


const Home = () => {
  return (
    <Layout>
      <div>
         <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#">Siimple.</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />

                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" active>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <h1>This is home page</h1>
      </div>
    </Layout>
  )
}

export default Home
