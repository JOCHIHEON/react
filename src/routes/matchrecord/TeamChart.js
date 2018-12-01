import React, { Component } from 'react';
import { Col, Card, CardBody, CardHeader, Row } from 'mdbreact';
import { Line } from 'react-chartjs-2';

class ChartSection2 extends Component {
    render(){
        const dataLine = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            options:[],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1, 1, 1, 1, 1, 1, 1]
                
                
              }
            ]
        };


        return (
            <Row className="mb-4">
                <Col md="12" lg="4" className="mb-4">
                    <Card className="mb-4">
                    <CardHeader>Line chart</CardHeader>
                    <CardBody>
                        <Line data={dataLine} options={{responsive: true }} />
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
    
}

export default ChartSection2;

