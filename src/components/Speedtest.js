import React, { useState, useEffect, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LineGraph from './graphsAndCharts/internetChart';

const SpeedDisplay = () => {
    const [speedData, setSpeedData] = useState(null);
    const [speedRecords, setSpeedRecords] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [lastUpdated, setLastUpdated] = useState(null);
    const intervalRef = React.useRef(null);

    const fetchSpeedData = async () => {
        try {
            const response = await fetch('/speedtest');
            if (response.ok) {
                const data = await response.json();
                setLastUpdated(new Date());
                setSpeedData(data[0]);
                setSpeedRecords(data[1]);
                setErrorMessage('');
            } else {
                setErrorMessage('An error occurred while fetching speed data.');
            }
        } catch (error) {
            setErrorMessage('An error occurred while fetching speed data.');
        }
    };

    const fetchData = useCallback(async () => {
        await fetchSpeedData();
    }, []);

    useEffect(() => {
        fetchData();

        intervalRef.current = setInterval(fetchData, 20 * 60 * 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [fetchData]);

    return (
        <Card bg={'secondary'} text={'light'} className={'mb-3'}>
            <Card.Body>
                <Card.Title>INTERNET SPEED</Card.Title>
                <hr className='border-gray mt-1' />

                {errorMessage && <p>{errorMessage}</p>}

                <Card.Text>
                    <Row>
                        <Col xs={6}>
                            <p className='text-muted my-0'>Download</p>
                            <h4>{speedData ? (speedData.download / 1000000).toFixed(1) : '...'} <small>Mbps</small></h4>
                        </Col>

                        <Col xs={6}>
                            <p className='text-muted my-0'>Upload</p>
                            <h4>{speedData ? (speedData.upload / 1000000).toFixed(1) : '...'} <small>Mbps</small></h4>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12} className="mt-3">
                            <LineGraph data={speedRecords} />
                        </Col>
                    </Row>

                    <hr className='border-gray my-1' />

                    <Row>
                        <Col>
                            {speedData ? (
                                <small className='text-muted'>Updated <span> {lastUpdated.toLocaleTimeString()} </span></small>
                            ) : (
                                <small className='text-muted'>Updating now...</small>
                            )}
                        </Col>
                    </Row>

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SpeedDisplay;