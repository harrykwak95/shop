import './App.css';
import {useState} from 'react'
import { Container, Row, Nav, Navbar  } from 'react-bootstrap';
import data from './data';
import Product from './product';
import {Routes, Route, Link} from 'react-router-dom';
import Detail from "./detail";
import axios from "axios";

function App() {
    const [shoes, setShoes] = useState(data);
    const [btnClickCnt, setBtnClickCnt] = useState(2);
    const [loadingShoes, setLoadingShoes] = useState(false);
    const [notExistShoes, setNotExistShoes] = useState(false);

  return (
    <div className="App">
        <Navbar bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="/">Harry's</Navbar.Brand>
                <Nav className="me-auto" style={{color:"gray"}}>
                    <Link to="/" style={{ color:"inherit", textDecoration: "inherit", paddingLeft: '10px' }}>Home</Link>
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/" element={
                <>
                    <div className="main-bg"></div>
                    <Container>
                        <Row>
                            {shoes.map((shoe, i) => (
                                <Product shoes={shoe} key={i}/>
                            ))}
                        </Row>
                    </Container>
                    {loadingShoes && <p>로딩중...</p>}
                    {notExistShoes && <p>신발 없3</p>}
                    <button onClick={()=>{
                        setLoadingShoes(true);
                        let data = "data" + btnClickCnt + ".json";
                        let url = 'https://codingapple1.github.io/shop/' + data;
                        console.log(url);
                        axios.get(url)
                        .then((result)=>{
                            setLoadingShoes(false);
                            let tempShoes = [...shoes, ...result.data ];
                            setShoes(tempShoes);
                            setBtnClickCnt(btnClickCnt+1);
                        }).catch(()=>{
                            setLoadingShoes(false);
                            setNotExistShoes(true);
                        })}}>
                        버튼
                    </button>
                </>
            } />
            <Route path="/detail/:detailId" element={<Detail shoes={shoes}/>} />
        </Routes>





    </div>
  );
}


export default App;
