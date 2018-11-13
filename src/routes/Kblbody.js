import React,  { Component } from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'

class Kblbodys extends Component {
    render() {
        return(
            <div className="Kblbodys">
              <ListGroup>
                    <ListGroupItem href="#" active>팬게시판</ListGroupItem>
                    <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem href="#">Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Kblbodys;