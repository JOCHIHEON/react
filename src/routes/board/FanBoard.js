import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import { Table, TableBody, TableHead  } from 'mdbreact';

const MyListGroup = (props) => {
    return(
            <ListGroup>
                <ListGroupItem></ListGroupItem>
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