import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import style from './Teaminfo.css';
import DB from "../../img/DB.png";



const body = () => {
    
        return(
            <div>
                <Row>
                    <Col>
                    <h2>원주 DB 프로미</h2>
                    </Col>
                </Row>
                <Row>
                    <Col><Link to = "/teaminfo/team/teampro">팀소개</Link></Col>
                    <Col><Link to = "/teaminfo/team/teamschedule">일정 및 기록</Link></Col>
                    <Col><Link to = "/teaminfo/team/teammember">선수소개</Link></Col>
                    <Col><Link to = "/teaminfo/team/teamrecode">팀기록실</Link></Col>
                </Row>
              
                <Row>
                    <div class="card" id="card" style={style}>
                    <img class="card-img-top" src={DB} width="50px" height="250px" ></img>
                    <div class="card-body"></div>
                    <h4 class="card-title"><a>원주 DB 프로미</a></h4>
                    <p class="card-text">구단주 : 김정남</p>
                    <p class="card-text">구단주 대행 : -</p>
                    <p class="card-text">단장 : 신해용</p>
                    <p class="card-text">감독 : 이상범</p>
                    <p class="card-text">코치 : 이효상,김성철</p>
                    <p class="card-text">주소 : 서울시 강남구 테헤란로 432 DB금융센터 15층</p>
                    <p class="card-text">연고지/모기업 : 원주 / DB손해보험</p>
                    <p class="card-text">전화/팩스 : 02)3011-3176 / 0505)181-0092</p>
                    </div>
                    </Row>    
                    </div>
                  


               
        );
    
};
export default body;