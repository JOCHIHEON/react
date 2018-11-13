import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyListGroup from './Kblbody';


class body extends Component {
    render(){
        return(
            <Container color="light">
                <Row>
                    <Col>
                    <p >자유게시판</p>
                    </Col>
                    <Col xl="10">
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>고양 오리온 오리온스</p>
                    </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                <Col>
                <p>부산 KT 소닉붐</p>
                </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
               <p>서울 SK 나이츠</p> 
                </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>안양 KGC 인삼공사</p> 
                </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                <Col>
                <p>울산 현대모비스 피버스</p> 
                </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                <Col>
                <p>인천 전자랜드 엘리펀츠</p> 
                </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                <Col>
                <p>전주 KCC 이지스</p> 
                </Col>
                    <Col xl="10">
                        
                    </Col>
                </Row>
                <Row>
                <Col>
                <p>창원 LG 세이커스</p> 
                </Col>
                    <Col xl="10">
                       
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default body;