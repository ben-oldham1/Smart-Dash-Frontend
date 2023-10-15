import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SunInfo = ({ label, value }) => (
  <Col xs={6}>
    <p className='text-muted my-0'>{label}</p>
    <h4>{value ? value : '...'}</h4>
  </Col>
);

export default function Suncycle(props) {
  const [sunCycleData, setSunCycleData] = useState(null);
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
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 30 * 60 * 1000); // Fetch data every 30 minutes

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card bg={'secondary'} text={'light'} className={'mb-3'}>
      <Card.Body>
        <Card.Text>
          <Row>
            <SunInfo label='Sunrise' value={sunCycleData ? sunCycleData['sunrise'] : null} />
            <SunInfo label='Sunset' value={sunCycleData ? sunCycleData['sunset'] : null} />
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}