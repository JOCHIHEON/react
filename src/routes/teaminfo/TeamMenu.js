import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import style from './Teaminfo.css';




const body = () => {
    
        return(
            <div>
                <Row>
                    
                    <Col>
                    <h2>원주 DB 프로미</h2>
                    </Col>
                </Row>
                <Row>
                    <Col><Link to = "/teaminfo/team/teaminfo">팀소개</Link></Col>
                    <Col><Link to = "/teaminfo/team/teamschedule">일정 및 기록</Link></Col>
                    <Col><Link to = "/teaminfo/team/teammember">선수소개</Link></Col>
                    <Col><Link to = "/teaminfo/team/teamrecorde">팀기록실</Link></Col>
                </Row>
              
           
                    </div>
                  


               
        );
    
};
export default body;