import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, Mask, View} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import ChatWidget from './ChatWidget';


class FullPageIntroWithFixedNavbar extends React.Component {
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
                <Navbar color="blue-grey" dark expand="md" scrolling>
                  <NavbarBrand href="/">
                      <strong>REBOUND</strong>
                  </NavbarBrand>
                </Navbar>
                  <Navbar color="blue-grey" dark expand="md" scrolling>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                      <NavbarNav left>
                        <NavItem>
                            <NavLink to="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Profile</NavLink>
                        </NavItem>
                      </NavbarNav>
                    </Collapse>
                  </Navbar>
                </div>
          </Router>
          
          <View src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <Mask overlay="black-light" style={{flexDirection: 'column', height: '100vh'}} className="flex-center  text-white text-center">
              <h2>This Navbar is fixed</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <br/>
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </Mask>
          </View>
        </header>
        <main>
        <ChatWidget />
          <Container className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Container>
        </main>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;