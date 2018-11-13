import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyListGroup from './Kblbody';


class body extends Component {
    render(){
        return(
            <Container color="light">
                <Row>
                    자유게시판
                    <Col>
                        <MyListGroup/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default body;