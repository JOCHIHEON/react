import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom';





const body = () => {
    
        return(
            <div>
                <Row>   
                    <Col>
                    <h2>원주 DB 프로미</h2>
                    </Col>
                </Row>
                <Row>
                    <Col><Link to = "/teamlist/teammenu/teaminfo">팀소개</Link></Col>
                    <Col><Link to = "/teamlist/teammenu/teamschedule">일정 및 기록</Link></Col>
                    <Col><Link to = "/teamlist/teammenu/teammember">선수소개</Link></Col>
                    <Col><Link to = "/teamlist/teammenu/teamrecorde">팀내 선수 기록</Link></Col>
                </Row>
                    </div>
                  


               
        );
    
};
export default body;