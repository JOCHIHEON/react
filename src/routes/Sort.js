import React from'react';
import {ReactBsTable,BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}
,{
    id:51,
    name: "Product1",
    price: 120
}, {
    id: 42,
    name: "Product2",
    price: 80
},
{
    id: 11,
    name: "Product1",
    price: 120
}, {
    id: 32,
    name: "Product2",
    price: 80
}];

class DefaultSortTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
        this.options = {
            defaultSortName: 'name',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
          };
      }
    
      handleClick = (rowKey) => {
        alert(this.refs.table.getPageByRowKey(rowKey));
      }
    
      render() {
        return (
        <div>
            <BootstrapTable
              ref='table'
              data={ products }
              pagination={ true }
              search={ true }
              options={ this.options }
              >
              <TableHeaderColumn dataField='id' dataSort isKey={true}>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name' dataSort>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </div>
       );
      }
    }export default DefaultSortTable;

  /*이걸로 모든테이블 변경
  http://allenfang.github.io/react-bootstrap-table/index.html 사이트 참조 css먹이는법등 */