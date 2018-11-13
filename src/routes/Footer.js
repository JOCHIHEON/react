import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import Footerlogo from "./img/footerlogo.png";

const Footerpage = () => {
  return (
  <Footer color="blue-grey" className="font-small pt-4 mt-4" >
    <Container fluid className="text-center text-md-left">
      <Row>
      <img src={Footerlogo} width="100px" height="100px"/>
        <Col md="6">
        <p>
        농구구기록실 rebound.com(리바운드)는 농구팬들을 위해운영되는 사이트입니다.
      </p>
        <p>리바운드에서 제공하는 한국 프로농구 기록및 통계데이터는 오류가 생기면  KBL과 차이가 있을 수 있습니다.
        </p>
        <p>
        이점 유의 하여 사용 하시길 바랍니다. 이에 따른 법적책임은 리바운드에서 책임지지 않습니다.
        </p>
        </Col>
        <Col md="4">
        <h5 className="text-md-right">The makers</h5>
        <ul>
          <li className="list-unstyled text-md-right">
            <a href="#!">Jo Chiheon</a>
          </li>
          <li className="list-unstyled text-md-right">
            <a href="#!">Park Gyuwon</a>
          </li>
          <li className="list-unstyled text-md-right">
            <a href="#!">Choi Myeonggwon</a>
          </li>
        </ul>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright text-center py-3">
      <Container fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.rebound.com"> Rebound.com </a>
      </Container>
    </div>
  </Footer>
  );
};

export default Footerpage;