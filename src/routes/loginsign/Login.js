import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import { Link, Route } from 'react-router-dom';

const body = () =>  {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">로그인</p>
                  <div className="grey-text">
                    <Input label="아이디" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="비밀번호" icon="lock" group type="password" validate error="wrong" success="right"/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="black" type="submit">로그인</Button>
                  </div>
                  <div className="text-right py-4 mt-3">
                    <Link to="/signup/">회원가입</Link><br/>
                    <Link to="">비밀번호 찾기</Link>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default body;