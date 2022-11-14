import './App.css';
import {Row, Col, Container, Nav} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(props) {

    let {detailId} = useParams();
    const shoes = props.shoes[detailId];
    const shoesImgNum = shoes.id+1;
    const imgLink = "https://codingapple1.github.io/shop/shoes"+shoesImgNum+".jpg";

    const [displayDiscount, setDisplayDiscount] = useState(true);
    const [displayWarn, setDisplayWarn] = useState(false);
    const [onlyNum, setOnlyNum] = useState();

    const [tabState, setTabState] = useState(0);
    let [detailFade, setDetailFade] = useState('');

    useEffect(() => {
             let timer = setTimeout(()=>{
                 setDisplayDiscount(false);

            }, 2000);

             return () => {
                 clearTimeout(timer);

             }
    }, []);

    useEffect(() => {
        let tabEffect = setTimeout(()=>{setDetailFade('end')}, 100)
        return()=>{
            clearTimeout(tabEffect);
            setDetailFade('')
        }
    }, []);

    function onlyNumFunc(i, e){
        if(i.target.value!==null){
            setOnlyNum(i.target.value);
            setDisplayWarn(true);
        }
    }


    return (<div className={`start ${detailFade}`}>
                <Container>
                    <Row>
                        { displayDiscount &&
                            <div className="alert alert-warning">
                                2초 이내 구매시 할인
                            </div>
                        }

                        <Col md={6}>
                            <img src={imgLink} width="100%" alt={"x"}/>
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
                    <Nav variant="tabs" defaultActiveKey="link-1">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={()=>setTabState(0)}>버튼1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={()=>setTabState(1)}>버튼2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" onClick={()=>setTabState(2)}>버튼3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent tabState={tabState}/>


                </Container>
        </div>
    );
}

function TabContent({tabState}){

    let [fade, setFade] = useState('');

    useEffect(() => {
        let tabEffect = setTimeout(()=>{setFade('end')}, 100)
        return()=>{
            clearTimeout(tabEffect);
            setFade('')
        }
    }, [tabState]);

    return (
        <div className={`start ${fade}`}>
            {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tabState]}
        </div>
    )
}

export default Detail;
