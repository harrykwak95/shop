import './App.css';
import {Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Product(props) {

    const shoes = props.shoes;
    const shoesImgNum = shoes.id+1;
    const imgLink = "https://codingapple1.github.io/shop/shoes"+shoesImgNum+".jpg";
    console.log(imgLink);

    return (
        <Col md={4}>
            <Link to={"detail/" + shoes.id} style={{ color:"inherit", textDecoration: "inherit", paddingLeft: '10px' }}>
                    <img src={imgLink} width="80%" alt="img x"/>
                    <h4>상품명 :: {shoes.title}</h4>
                    <p>내용 :: {shoes.content}</p>
                    <p>가격 :: {shoes.price}</p>
            </Link>
        </Col>
);
}

export default Product;
