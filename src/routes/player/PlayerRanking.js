import React from 'react';
import "./PlayerRanking.css";
import { Button, Card, Link, CardImage, CardText, Col,CardHeader,Row } from 'mdbreact';



const MyListGroup = (props) =>  {
    return (
    <div id="main"> {/*이페이지 전체 Div */} 
     <Card style={{width: '1500px',height:'2000px'}}  border="white"> {/*전체 페이지 카드 크기*/}
      <CardHeader color="white" tag="h3"><p id="title">선수 순위</p></CardHeader>  {/*color="white"는 CardHeader 배경색 글자색은 p태그에 id="title"로 변경가능*/}
      <Row>
        <Col>
        <div id="cardmain"> {/*모든 카드는 Div id="cardmain"으로 마진을 줘서 동일한 값을 적용시킴*/}
          <Card style={{width:'600px',height:'370px'}}> {/*각 부분별 카드 */}
            <Row>   
             <Col>  
          <CardHeader color="black" tag="h5">득점</CardHeader>  {/*CardHeader는 각 기록 부분별 이름*/}
              </Col> 
            </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText> {/*CardText에 div id="rank"는 순위를 나타내고
                 a태그를 누르면 각순위별 선수 정보를 볼수있게 넘어가야한다.*/}
              <div id="rank">1.<a id="player"href="https://www.rebound.com">선수이름 </a></div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerscore">더보기</Button></div> {/*Button은 href를 사용해 해당 부분별 선수 순위를 전부 보여주는 페이지로 이동시킨다.*/}
          </Row>
          </Card>
          </div>
        </Col>
        {/*이하 모든 카드들은 위 설명과 중복되므로 생략 */}
       
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">리바운드</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerrebound">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">어시스트</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerassist">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">블록</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerblock">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">스틸</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playersteal">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">3점슛</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerthreepointshot">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">자유투</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerfreethrow">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
        <Col>
        <div id="cardmain">
          <Card style={{width:'600px',height:'370px'}}>
            <Row>   
              <Col>  
          <CardHeader color="black" tag="h5">덩크슛</CardHeader>
          </Col> 
          </Row>
          <div id="cover">
          <Row>
            <Col>
              <CardImage
               src="http://kbl.or.kr/images/playersPhoto/290450.jpg"
              alt="오세근"
              class="rounded-circle img-fluid"
              width="200"
              height="110"
             ></CardImage>
            </Col>
            <Col>
              <CardText>
              <div id="rank">1.</div>
              <div id="rank">2.</div>
              <div id="rank">3.</div>
              <div id="rank">4.</div>
              <div id="rank">5.</div>
              </CardText>
            </Col>
          </Row>
          </div>
          <Row>
           <div id="button"><Button color="black" href="/playerdunkshot">더보기</Button></div>
          </Row>
          </Card>
          </div>
        </Col>
      </Row>
    </Card>
    </div>
  
    )
  }
export default MyListGroup;