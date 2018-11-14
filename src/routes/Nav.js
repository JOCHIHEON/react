import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container} from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';
import Navlogo from "../img/navlogo.png";

class FixedNavbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        collapse: false,
        isWideEnough: false
      };
    this.onClick = this.onClick.bind(this);
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
  }
  onClick(){
      this.setState({
        collapse: !this.state.collapse
    });
  }

render() {
    return (
          <div>
            <header>
              <Router>
                <div>
                <Navbar color="black" dark expand="md" scrolling>
                  <NavbarBrand href="/">
                    <img src={Navlogo}/>
                  </NavbarBrand>
                </Navbar>
                  <Navbar color="black" dark expand="md" scrolling>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                      <NavbarNav left>
                        <NavItem>
                          <Dropdown>
                            <DropdownToggle color="black">일정/결과</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="/schedule">경기일정</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">경기기록</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">팀순위</DropdownItem>
                                <DropdownItem href="#">상대전적</DropdownItem>
                                <DropdownItem href="#">부문별 팀순위</DropdownItem>
                                <DropdownItem href="#">공수력 비교</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">구단정보</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">원주DB</DropdownItem>
                                <DropdownItem href="#">서울삼성</DropdownItem>
                                <DropdownItem href="#">서울SK</DropdownItem>
                                <DropdownItem href="#">창원LG</DropdownItem>
                                <DropdownItem href="#">고양오리온스</DropdownItem>
                                <DropdownItem href="#">인천전자랜드</DropdownItem>
                                <DropdownItem href="#">전주KCC</DropdownItem>
                                <DropdownItem href="#">안양KGC</DropdownItem>
                                <DropdownItem href="#">부산KT</DropdownItem>
                                <DropdownItem href="#">울산현대모비스</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">선수정보</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">선수상세</DropdownItem>
                                <DropdownItem href="#">선수순위</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">경기 중계</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">네이버 중계</DropdownItem>
                                <DropdownItem href="#">아프리카 중계</DropdownItem>
                                <DropdownItem href="#">KBL 중계</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">게시판</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="/board/free">자유게시판</DropdownItem>
                                <DropdownItem href="/board/fan">팬게시판</DropdownItem>
                                <DropdownItem href="/board/qna">Q&A</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">뉴스</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">네이버 뉴스</DropdownItem>
                                <DropdownItem href="#">KBL 뉴스</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                      </NavbarNav>
                    </Collapse>
                  </Navbar>
                </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default FixedNavbar;