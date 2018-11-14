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
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">경기기록</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">구단정보</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">선수정보</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">경기중계</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">게시판</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle color="black">문의하기</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
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