import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function Forecast(props) {
    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>FORECAST</Card.Title>

                    <hr className='border-gray mt-1' />

                    <Card.Text>
                        <Row className='mb-3'>
                            <Col xs={3}>
                                <h2>
                                    <i class="bi bi-cloud-sun"></i>
                                </h2>
                                <p className='text-muted my-0'>
                                    Sun
                                </p>
                                <p className='my-0'>
                                    14-22 c
                                </p>
                                <p className='my-0'>
                                    Clear skies
                                </p>
                            </Col>
                            <Col xs={3}>
                                <h2>
                                    <i class="bi bi-sun"></i>
                                </h2>
                                <p className='text-muted my-0'>
                                    Mon
                                </p>
                                <p className='my-0'>
                                    14-22 c
                                </p>
                                <p className='my-0'>
                                    Clear skies
                                </p>
                            </Col>
                            <Col xs={3}>
                                <h2>
                                    <i class="bi bi-cloud-sun"></i>
                                </h2>
                                <p className='text-muted my-0'>
                                    Tues
                                </p>
                                <p className='my-0'>
                                    14-22 c
                                </p>
                                <p className='my-0'>
                                    Clear skies
                                </p>
                            </Col>
                            <Col xs={3}>
                                <h2>
                                    <i class="bi bi-cloud-drizzle"></i>
                                </h2>
                                <p className='text-muted my-0'>
                                    Weds
                                </p>
                                <p className='my-0'>
                                    14-22 c
                                </p>
                                <p className='my-0'>
                                    Clear skies
                                </p>
                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
