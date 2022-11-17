import './App.css';
import {Row, Col, Container, Nav} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(props) {

    let {detailId} = useParams();
    const shoes = props.shoes;
    const shoesOne = props.shoes[detailId];
    const shoesImgNum = shoesOne.id+1;
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
        let tabEffect = setTimeout(()=>{setDetailFade('end')}, 200)
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
                            <h4 className="pt-5">{shoesOne.title}</h4>
                            <p>{shoesOne.content}</p>
                            <p>{shoesOne.price.toLocaleString()}원</p>
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
                    <TabContent tabState={tabState} shoes={shoes}/>


                </Container>
        </div>
    );
}

function TabContent({tabState, shoes}){

    let [fade, setFade] = useState('');

    // 깜빡이는 현상(이전 값 가지고 있으면서 바뀌는)을 없애기 위한 컴포넌트 상태 값
    const [tabContentState, setTabContentState] = useState(tabState);

    useEffect(() => {
        setTabContentState(tabState);
        setFade('');
        setTimeout(()=>{setFade('end')}, 200)
    }, [tabState]);

    return (
        <div className={`start ${fade}`}>
            {[<div>{shoes[0].title}</div>, <div>{shoes[1].title}</div>, <div>{shoes[2].title}</div>][tabContentState]}
        </div>
    )
}

export default Detail;
