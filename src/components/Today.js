import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Today(props) {
    return (
        <>
            <Row className='mb-3'>
                <Col xs={6}>
                    <h2>
                        DATE
                    </h2>
                    <div className='digit-block'>
                        <h3>18 May</h3>
                    </div>

                </Col>

                <Col xs={3}>
                    <h2>
                        DAY
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            THU
                        </h3>
                    </div>
                </Col>

                <Col xs={3}>
                    <h2>
                        YEAR
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            2023
                        </h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                    <h2>
                        TIME
                    </h2>
                    <div className='digit-block'>
                        <h3>13:03</h3>
                    </div>

                </Col>

                <Col xs={3}>
                    <h2>
                        SUNRISE
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            07:52
                        </h3>
                    </div>
                </Col>

                <Col xs={3}>
                    <h2>
                        SUNSET
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            21:07
                        </h3>
                    </div>
                </Col>
            </Row>
        </>
    )
}
