import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SpeedDisplay = () => {
    const [speedData, setSpeedData] = useState(null);

    const fetchSpeedData = async () => {
        const response = await fetch('/speedtest');
        const data = await response.json();
        setSpeedData(data);
    };

    useEffect(() => {
        fetchSpeedData();

        const interval = setInterval(() => {
            fetchSpeedData();
        }, 60 * 60 * 1000); // Fetch data every 60 minutes

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Card bg={'secondary'} text={'light'} className={'mb-3'}>
            <Card.Body>
                <Card.Title>Internet speed</Card.Title>
                <Card.Text>
                    <Row>
                        <Col xs={6}>
                            <p className='text-muted my-0'>Download</p>
                            {speedData ? (
                                <h4>{(speedData.download / 1000000).toFixed(1)} <small>Mbps</small></h4>
                            ) : (
                                <h4>Loading...</h4>
                            )}
                        </Col>

                        <Col xs={6}>
                            <p className='text-muted my-0'>Upload</p>
                            {speedData ? (
                                <h4>{(speedData.upload / 1000000).toFixed(1)} <small>Mbps</small></h4>
                            ) : (
                                <h4>Loading...</h4>
                            )}
                        </Col>
                    </Row>

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SpeedDisplay;
