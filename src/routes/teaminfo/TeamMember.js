import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';



const body = () => {
        return(
            <div>
            <h3>가드</h3>
           <ul>
               <li>
                    <Col>
        <Card>
          <CardImage className="img-fluid"  waves />
          <CardBody>
              <CardTitle>선수이름</CardTitle>
          
          </CardBody>
        </Card>
      </Col>
      </li>
           </ul>
           <h3>포워드</h3>
           <ul>
               <li>
                    <Col>
        <Card>
          <CardImage className="img-fluid"  waves />
          <CardBody>
              <CardTitle>선수이름</CardTitle>
            
          </CardBody>
        </Card>
      </Col>
      </li>
           </ul>
           <h3>센터</h3>
           <ul>
               <li>
                    <Col>
        <Card>
          <CardImage className="img-fluid"  waves />
          <CardBody>
              <CardTitle>선수이름</CardTitle>
          </CardBody>
        </Card>
      </Col>
      </li>
           </ul>
           </div>
        );
    
};
export default body;