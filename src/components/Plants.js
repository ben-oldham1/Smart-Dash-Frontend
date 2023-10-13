import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import HumidityGauge from './HumidityGauge'

export default function Environment(props) {

    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>PLANTS</Card.Title>

                    <hr className='border-gray my-1' />

                    <Card.Text>
                        <Row className='mb-3'>
                            <Col xs={6}>
                                <p className='text-muted my-0'>
                                    Temperature
                                </p>
                                <h4>
                                    17
                                    <small>°C</small>
                                </h4>
                            </Col>
                            <Col xs={6}>
                                <p className='text-muted my-0'>
                                    Soil moisture
                                </p>
                                <h4>
                                    41
                                    <small>%</small>
                                </h4>
                            </Col>
                        </Row>

                        <hr className='border-gray my-1' />

                        <Row>
                            <Col xs={12}>
                                <small className='text-muted'>Updated 45 mins ago</small>
                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
