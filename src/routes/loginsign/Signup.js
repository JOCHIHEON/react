import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class FormsPage extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">회원가입</p>
              <div className="grey-text">
                <Input label="아이디" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="닉네임" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="이름" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="이메일" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                <Input label="비밀번호" icon="lock" group type="password" validate/>
                <Input label="비밀번호 확인" icon="lock" group type="password" validate/>
                <Input label="서포트팀" icon="tag" group type="text" validate error="wrong" success="right"/>
                <Input label="휴대폰번호" icon="phone" group type="text" validate error="wrong" success="right"/>
              </div>
              <div className="text-center">
                <Button color="primary">회원가입</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;