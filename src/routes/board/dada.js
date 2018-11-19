import React from 'react';
import {DataTable} from'react-data-components';
var names = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var cities = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var addresses = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
const columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' }
];
const data = [
];

for (var i = 0; i < 1000; i++) {
  data.push({
    name: i,
    name: names[~~(Math.random() * names.length)],
    city: cities[~~(Math.random() * cities.length)],
    address: addresses[~~(Math.random() * addresses.length)]
  });
}

const body = () => {
    return(
      <div>
 <DataTable
      className="container"
      keys="id"
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
   </div>
  )
    };
    export default body;