import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import { Table, TableBody, TableHead  } from 'mdbreact';

const MyListGroup = (props) => {
    return(
            <ListGroup>
              <div>
              <input type="text" defalutValue="initial value" /><button>검색</button>
              </div>
                       <Table hover>
                       <TableHead>
                         <tr>
                           <th>경기일자</th>
                           <th>요일</th>
                           <th>홈팀</th>
                           <th>경기장</th>
                           <th>기록보기</th>
                         </tr>
                       </TableHead>
                       <TableBody hover>
                       <tr>
                           <th>2018.11.15</th>
                           <th>서울</th>
                           <th>원주</th>
                           <th>잠실</th>
                           <th>100:95</th>
                        </tr>
                        </TableBody>          
                     </Table>
            </ListGroup>
     
    );
};

export default MyListGroup;