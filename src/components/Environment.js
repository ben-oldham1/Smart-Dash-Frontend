import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import TempGauge from './TempGauge'

export default function Environment(props) {
    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>Weather</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col xs={6}>
                                <TempGauge temp={20} id={'outsideTemp'} />
                            </Col>

                            <Col xs={6}>
                                
                                <Row>
                                    <Col className='p-0' xs={6}>
                                        <p className='text-muted my-0'>
                                            Feels like
                                        </p>
                                        <h4>
                                            15.8°C
                                        </h4>

                                        <p className='text-muted my-0'>
                                            Humidity
                                        </p>
                                        <h4>
                                            34%
                                        </h4>
                                    </Col>

                                    <Col className='p-0' xs={6}>
                                        <p className='text-muted my-0'>
                                            Wind
                                        </p>
                                        <h4>
                                            10.4 <small>mph</small>
                                        </h4>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <p className='text-muted my-0'>
                                    Weather
                                </p>
                                <h4>
                                    Scattered Clouds
                                </h4>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
