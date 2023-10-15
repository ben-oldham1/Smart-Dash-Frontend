import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Devices(props) {

    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>DEVICES</Card.Title>

                    <hr className='border-gray mt-1' />

                    <Card.Text>
                        <Row>
                            <Col xs={12}>

                                <Button variant='dark' onClick={() => props.openModal('settings')}>
                                    <i class="bi bi-gear"></i> Settings
                                </Button>

                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}