import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Body extends Component {
    render(){
        return(
            <Container color="light">
                <Row>
                    <Col>
                        컬럼
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Body;