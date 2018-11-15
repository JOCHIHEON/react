import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import { Table, TableBody, TableHead  } from 'mdbreact';
import { Col, Fa, FormInline } from "mdbreact";

const MyListGroup = (props) => {
    return(
      
            <ListGroup>
            
            <div>
            <Col md="6">
        <FormInline className="md-form">
          <Fa icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </FormInline>
      </Col>
              </div>
                       <Table hover>
                       <TableHead>
                         <tr>
                           <th>번호</th>
                           <th>팀명</th>
                           <th>제목</th>
                           <th>닉네임</th>
                           <th>작성일</th>
                           <th>조회수</th>
                         </tr>
                       </TableHead>
                       <TableBody hover>
                       <tr>
                           <th>1</th>
                           <th>팀명</th>
                           <th>test</th>
                           <th>test</th>
                           <th>test2</th>
                           <th>2</th>
                        </tr>
                        </TableBody>          
                     </Table>
            </ListGroup>
     
    );
};

export default MyListGroup;