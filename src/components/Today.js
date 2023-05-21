import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Today(props) {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const fetchSunriseSunset = () => {
            const apiKey = 'cadbd0ffe610d790aa93e83718ef070d';
            const url = `https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid=${apiKey}`;

            // Get user's current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    // Fetch weather data to get sunrise and sunset times
                    fetch(url.replace('{latitude}', latitude).replace('{longitude}', longitude))
                        .then((response) => response.json())
                        .then((data) => {
                            setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
                            setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
                            setLoading(false);

                            // Calculate time remaining until next midnight
                            const now = new Date();
                            const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
                            const timeRemaining = nextMidnight - now;

                            // Fetch sunrise and sunset times after time remaining
                            setTimeout(fetchSunriseSunset, timeRemaining);
                        })
                        .catch((error) => {
                            console.error('Error fetching sunrise and sunset times:', error);
                            setLoading(false);
                        });
                },
                (error) => {
                    console.error('Error getting current location:', error);
                    setLoading(false);
                }
            );
        };

        fetchSunriseSunset(); // Fetch initially

    }, []);

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short' };
        const parts = date.toLocaleDateString('en-US', options).split(' ');

        // Rearranges the date. E.g. 'Jan 10' becomes '10 Jan'
        return `${parts[1]} ${parts[0]}`;
    };


    return (
        <>
            <Row className='mb-3'>
                <Col xs={5}>
                    <h2>
                        DATE
                    </h2>
                    <div className='digit-block'>
                        <h3>{formatDate(currentDateTime)}</h3>
                    </div>

                </Col>

                <Col xs={4}>
                    <h2>
                        DAY
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            {currentDateTime.toLocaleDateString('en-US', { weekday: 'long' })}
                        </h3>
                    </div>
                </Col>

                <Col xs={3}>
                    <h2>
                        YEAR
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            {currentDateTime.getFullYear()}
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
                        <h3>{currentDateTime.toLocaleTimeString()}</h3>
                    </div>

                </Col>

                <Col xs={3}>
                    <h2>
                        SUNRISE
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            {loading ? 'Loading...' : sunrise}
                        </h3>
                    </div>
                </Col>

                <Col xs={3}>
                    <h2>
                        SUNSET
                    </h2>
                    <div className='digit-block'>
                        <h3>
                            {loading ? 'Loading...' : sunset}
                        </h3>
                    </div>
                </Col>
            </Row>
        </>
    )
}
