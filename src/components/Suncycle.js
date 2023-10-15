import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import TempGauge from "./components/TempGauge.js";


export default function Suncycle(props) {
    const [SunCycleData, setSunCycleData] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiUrl = `/suncycle`;

            try {
                setLastUpdated(new Date());

                const response = await fetch(apiUrl);
                const data = await response.json();

                setSunCycleData(data);
            } catch (error) {
                console.log('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();

        const interval = setInterval(fetchWeatherData, 30 * 60 * 1000); // Fetch data every 30 minutes

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>


                    <Card.Text>
                        <Row>
                            <Col xs={6}>
                                <p className='text-muted my-0'>
                                    Sunrise
                                </p>
                                <h4>
                                    {SunCycleData ? SunCycleData['sunrise'] : '...'}
                                </h4>
                            </Col>
                            <Col xs={6}>
                                <p className='text-muted my-0'>
                                    Sunset
                                </p>
                                <h4>
                                    {SunCycleData ? SunCycleData['sunset'] : '...' }
                                </h4>
                            </Col>
                        </Row>


                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
