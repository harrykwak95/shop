import './App.css';
import {useState} from 'react'
import { Container, Row, Nav, Navbar  } from 'react-bootstrap';
import data from './data';
import Product from './product';

function App() {
    let [shoes] = useState(data);

  return (
    <div className="App">
        <Navbar bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Harry's</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div className="main-bg"></div>

        <Container>
            <Row>
                {shoes.map((shoe) => (
                    <Product shoes={shoe} />
                ))
                }
            </Row>
        </Container>

    </div>
  );
}


export default App;
