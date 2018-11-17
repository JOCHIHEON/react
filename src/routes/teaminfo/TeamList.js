import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom';


const body = () => {
    
        return(
            <div>
                <Row>
                    <Col>
                    <h2>구단정보</h2>
                    </Col>
                </Row>
                <Row>
                    <Col><Link to = "/teamlist/teammenu">고양오리온스</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">부산KT</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">서울삼성</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">서울SK</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">안양KGC</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">인천전자랜드</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">울산현대모비스</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">원주DB</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">전주KCC</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">창원LG</Link></Col>
                </Row>
                </div>
                    
                
          
            

           
        );
    
};
export default body;