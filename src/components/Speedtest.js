import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LineGraph from './graphs/internetChart';

const SpeedDisplay = () => {
    const [speedData, setSpeedData] = useState(null);
    const [speedRecords, setSpeedRecords] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [lastUpdated, setLastUpdated] = useState(null);
    const [mounted, setMounted] = useState(true);
    let interval; // Declare the interval in the outer scope

    const fetchSpeedData = async () => {
        console.log("fetchSpeedData called");

        try {
            const response = await fetch('/speedtest');
            if (response.ok) {
                setLastUpdated(new Date());
                const data = await response.json();
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

    useEffect(() => {
        const fetchData = async () => {
            await fetchSpeedData();
        };

        fetchData();

        interval = setInterval(fetchData, 20 * 60 * 1000); // Fetch data every 20 minutes

        return () => {
            clearInterval(interval); // Clear interval on component unmount
            setMounted(false); // Mark the component as unmounted
        };
    }, []); // Run only once on mount

    // This useEffect watches for changes in the 'speedData' state and clears the interval if the component is unmounted
    useEffect(() => {
        return () => {
            clearInterval(interval); // Clear interval if the component is unmounted during the 20 minutes interval
        };
    }, [speedData]);

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
                        {speedData ? (
                            <h4>{(speedData.download / 1000000).toFixed(1)} <small>Mbps</small></h4>
                        ) : (
                            <h4>...</h4>
                        )}
                    </Col>

                    <Col xs={6}>
                        <p className='text-muted my-0'>Upload</p>
                        {speedData ? (
                            <h4>{(speedData.upload / 1000000).toFixed(1)} <small>Mbps</small></h4>
                        ) : (
                            <h4>...</h4>
                        )}
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="mt-3">
                        <LineGraph data={speedRecords} />
                    </Col>
                </Row>

                <hr className='border-gray mb-1' />

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
