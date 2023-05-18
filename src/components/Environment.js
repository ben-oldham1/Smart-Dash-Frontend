import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Environment(props) {
    return (
        <>
            <Row className='mb-3'>
                <Col xs={4}>
                    <h2>
                        OUTSIDE TEMP
                    </h2>
                    <div className='digit-block green-tab'>
                        <h3>19.4c</h3>
                    </div>
                </Col>

                <Col xs={4}>
                    <h2>
                        FEELS LIKE
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            16.8c
                        </h3>
                    </div>
                </Col>

                <Col xs={4}>
                    <h2>
                        HUMIDITY
                    </h2>
                    <div className='digit-block red-tab'>
                        <h3>87%</h3>
                    </div>
                </Col>
            </Row>


            <Row>

                <Col xs={4}>
                    <h2>
                        WIND
                    </h2>
                    <div className='digit-block'>
                        <h3>10.3 kmph</h3>
                    </div>
                </Col>

                <Col xs={8}>
                    <Row className='mb-3'>
                        <Col xs={6}>
                            <h2>
                                VISIBILITY
                            </h2>
                            <div className='digit-block'>
                                <h3>10.4 km</h3>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <h2>
                                AIR PRESSURE
                            </h2>
                            <div className='digit-block'>
                                <h3>1084 hPa</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>
                                WEATHER
                            </h2>
                            <div className='digit-block'>
                                <h3>SCATTERED CLOUDS</h3>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    )
}
