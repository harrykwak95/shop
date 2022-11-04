import './App.css';
import { Row, Col  } from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(props) {

    let [count, setCount] = useState(0);
    let {detailId} = useParams();
    const shoes = props.shoes[detailId];
    const [displayDiscount, setDisplayDiscount] = useState(true);
    const [displayWarn, setDisplayWarn] = useState(false);
    const [onlyNum, setOnlyNum] = useState();
    useEffect(() => {
             let timer = setTimeout(()=>{
                 setDisplayDiscount(false);

            }, 2000);

             return () => {
                 clearTimeout(timer);

             }
    }, []);

    useEffect(() => {
    }, []);

    function onlyNumFunc(i, e){
        if(i.target.value!==null){
            setOnlyNum(i.target.value);
            setDisplayWarn(true);
        }
    }


    return (
        <>
            <Row>
                { displayDiscount &&
                    <div className="alert alert-warning">
                        2초 이내 구매시 할인
                    </div>
                }

                <Col md={6}>
                    <button onClick={()=>{setCount(count+1)}}>버튼</button>
                    {count}

                    <img src={shoes.link} width="100%"/>
                </Col>
                <Col md={6} mt={4}>
                    {
                        displayWarn &&
                        <p>숫자만 입력해주세요!</p>
                    }
                    <input type="text" value={onlyNum} onChange={(i, e)=>{ onlyNumFunc(i, e); }}/>
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price.toLocaleString()}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </Col>
            </Row>
        </>
    );
}

export default Detail;
