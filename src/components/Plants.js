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
                    <Card.Title>Plants</Card.Title>
                    <Card.Text>
                        <Row className='mb-3'>
                            <Col xs={4}>
                                <p className='text-muted my-0'>
                                    Node 1
                                </p>
                                <p className='my-0'>
                                    Ivy
                                </p>
                                <HumidityGauge temp={20} id={'outsideTemp'} />
                            </Col>
                            <Col xs={4}>
                                <p className='text-muted my-0'>
                                    Node 2
                                </p>
                                <p className='my-0'>
                                    Monstera
                                </p>
                                <HumidityGauge temp={40} id={'outsideTemp'} />
                            </Col>
                            <Col xs={4}>
                                <p className='text-muted my-0'>
                                    Node 3
                                </p>
                                <p className='my-0'>
                                    ZZ plant
                                </p>
                                <HumidityGauge temp={70} id={'outsideTemp'} />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <small>Updated 45 mins ago</small>
                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
