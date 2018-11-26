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
}];

class DefaultSortTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      }
    
      handleClick = (rowKey) => {
        alert(this.refs.table.getPageByRowKey(rowKey));
      }
    
      render() {
        return (
          <div>
            <div className='form-inline'>
              { `typing your row key -> ` }
              <input
                className='form-control'
                ref='rowKeyInput'
                onChange={ (e) => {
                  this.setState( {
                    text: e.target.value
                  } );
                } }
                value={ this.state.text } />
              { ' ' }
              <button
                className='btn btn-success'
                onClick={ () => {
                  this.handleClick(parseInt(this.refs.rowKeyInput.value, 10));
                } }>
                  get the page
              </button>
            </div>
            <BootstrapTable
              ref='table'
              data={ products }
              pagination={ true }
              search={ true }>
              <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </div>
       );
      }
    }export default DefaultSortTable;

  /*이걸로 모든테이블 변경
  http://allenfang.github.io/react-bootstrap-table/index.html 사이트 참조 css먹이는법등 */