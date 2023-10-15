import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Collapse, Alert } from 'react-bootstrap';

export default function DailySpacePic(props) {

    const [dailySpacePicData, setDailySpacePicData] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiUrl = `/dailyspacepic`;

            try {
                setLastUpdated(new Date());

                const response = await fetch(apiUrl);
                const data = await response.json();

                setDailySpacePicData(data);
            } catch (error) {
                console.log('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();

        const interval = setInterval(fetchWeatherData, 360 * 60 * 1000); // Fetch data every 6 hours

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (

        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>DAILY SPACE PIC</Card.Title>

                    <hr className='border-gray mt-1' />

                    <Card.Text>
                        <Row>
                            <Col xs={12}>
                                {dailySpacePicData ?
                                    <img className='img-fluid space-img mb-2' src={dailySpacePicData.url} alt="Image of space" />
                                    : '...'}
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <h4>
                                {dailySpacePicData ? dailySpacePicData.title : '...'}
                                </h4>
                            </Col>
                        </Row>

                        <hr className='border-gray my-1' />

                        <Row>
                            <Col xs={12}>
                                <small className='text-muted'>
                                    Copyright:
                                {dailySpacePicData ? 
                                dailySpacePicData.copyright
                                : '...'} (via NASA)   
                                </small>
                            </Col>
                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}