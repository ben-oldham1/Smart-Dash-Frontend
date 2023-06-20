import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import SpeedGauge from './SpeedGauge'


export default function InternetSpeed(props) {

    const speed = 500;


    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>
                        Internet speed
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            <Col xs={12}>
                                <SpeedGauge speed={17.1} id={'internetSpeedGraph'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <p>Updated <span className='text-primary'>45 mins</span> ago</p>
                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
