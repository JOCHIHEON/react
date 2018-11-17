import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom';


const body = () => {
    
        return(
            <div>
                <Row>
                    <Col>
                    <h2>경기기록</h2>
                    </Col>
                </Row>
                <Row>
                    <Col><Link to = "/teammatchmenu/teammatchrecord">팀순위</Link></Col>
                    <Col><Link to = "/fanboard/fanboard">상대전적</Link></Col>
                    <Col><Link to = "/teammatchmenu/teammatchranking">부분별 팀순위</Link></Col>
                    <Col><Link to = "/teammatchmenu/teammatchrecordview">경기당 팀평균 기록</Link></Col>
                </Row>
                </div>
                    
                
          
            

           
        );
    
};
export default body;