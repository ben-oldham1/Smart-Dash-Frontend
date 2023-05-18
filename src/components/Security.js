import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Security(props) {
    return (
        <>
            <Row className='mb-3'>
                <Col xs={8}>
                    <h2>
                        NAME
                    </h2>
                    <div className='digit-block'>
                        <h3>DOOR SENSOR</h3>
                    </div>

                </Col>

                <Col xs={4}>
                    <h2>
                        IP ADDRESS
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            192.0.1.625
                        </h3>
                    </div>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={6}>
                    <h2>
                        STATUS
                    </h2>
                    <div className='digit-block'>
                        <h3>DISARMED</h3>
                    </div>

                </Col>
            </Row>
        </>
    )
}
