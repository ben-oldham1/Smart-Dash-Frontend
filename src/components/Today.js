import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Suncycle from './Suncycle';

export default function Today(props) {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short' };
        const parts = date.toLocaleDateString('en-US', options).split(' ');
        return `${parts[1]} ${parts[0]}`;
    };

    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col xs={12}>
                                <h2 className='text-primary'>{currentDateTime.toLocaleTimeString()}</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <p className='text-muted my-0'>Day</p>
                                <h4>{currentDateTime.toLocaleDateString('en-US', { weekday: 'long' })}</h4>
                            </Col>
                            <Col xs={6}>
                                <p className='text-muted my-0'>Date</p>
                                <h4>{formatDate(currentDateTime)}</h4>
                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
