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
                    <Card.Title>House</Card.Title>
                    <Card.Text>

                        <Row>
                            <Col xs={12}>
                                <p className='text-muted my-0'>
                                    Bins
                                </p>
                                <Table hover variant="dark">
                                    <tbody>
                                        <tr>
                                            <td>23 Jun</td>
                                            <td>Recycling & black bins</td>
                                            <td>Ben</td>
                                        </tr>
                                        <tr>
                                            <td>30 Jun</td>
                                            <td>Recycling</td>
                                            <td>Tom</td>
                                        </tr>
                                        <tr>
                                            <td>7 Jul</td>
                                            <td>Recycling & black bins</td>
                                            <td>Alex</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}
