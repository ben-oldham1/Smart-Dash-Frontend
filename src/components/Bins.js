import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default function Bins(props) {
    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>BINS</Card.Title>
                    <Card.Text>

                        <Row>
                            <Col xs={12}>

                                <Row>
                                    <Col xs={3}>
                                        <p className='my-0'>23 Jun</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className='my-0'>Recycling & black bins</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='my-0'>Ben</p>
                                    </Col>
                                </Row>

                                <hr className='border-light my-2'/>

                                <Row>
                                    <Col xs={3}>
                                        <p className='my-0'>30 Jun</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className='my-0'>Recycling & black bins</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='my-0'>Ben</p>
                                    </Col>
                                </Row>

                                <hr className='border-light my-2'/>

                                <Row>
                                    <Col xs={3}>
                                        <p className='my-0'>7 Jun</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p className='my-0'>Recycling & black bins</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='my-0'>Ben</p>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}
