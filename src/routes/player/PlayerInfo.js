import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Row, Col 
} from "mdbreact";
import './PlayerInfo.css';

const body = () => {
    return(
        <div id="playerinfodiv">
      <Row>
        <Col>
          <Card style={{width: '1300px',height:'500px'}}>
              <Row>
                  <div id="playerimg">
             <Col>
            <CardImage className="img-fluid" src="http://kbl.or.kr/images/playersPhoto/290450.jpg" waves />
            </Col>
            </div>
            <Col>
            <div id="playerinfo">
            <CardBody>
              <CardText>
                  <div id="playerinfos">
                      <h3>이름</h3><br />
                  <h3>생년월일 </h3><br />
                  <h3>신장</h3><br />
                  <h3>팀</h3><br />
                  <h3>등번호</h3><br />
                  <h3>출신고교</h3><br />
                  </div>
                  </CardText>
            </CardBody>
            </div>
            </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </div>
    );
  }

export default body;