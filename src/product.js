import './App.css';
import { Col } from 'react-bootstrap';

function Product(props) {

    const shoes = props.shoes;

    return (
        <Col md={4}>
            <img src={shoes.link} width="80%"/>
            <h4>상품명 :: {shoes.title}</h4>
            <p>내용 :: {shoes.content}</p>
            <p>가격 :: {shoes.price}</p>
        </Col>
    );
}

export default Product;
