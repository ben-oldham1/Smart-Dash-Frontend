import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import TempGauge from './TempGauge'


const Environment = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = props.settingsData['weatherApiKey']; // OpenWeatherMap API key
      const city = props.settingsData['city'] + ',' + props.settingsData['country'];
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
        setLastUpdated(new Date());
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 15 * 60 * 1000); // Fetch data every 20 minutes

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  const { main, weather, wind } = weatherData;

  return (
    <Card bg={'secondary'} text={'light'} className={'mb-3'}>
      <Card.Body>
        <Card.Title>WEATHER</Card.Title>
        <Card.Text>
          <Row className='mb-2'>
            <Col xs={5}>
              <TempGauge temp={main.temp} id={'outsideTemp'} />
            </Col>

            <Col xs={7}>
              <Row>
                <Col xs={6}>
                  <p className='text-muted my-0'>Feels like</p>
                  <h4>{main.feels_like}°C</h4>

                  <p className='text-muted my-0'>Humidity</p>
                  <h4>{main.humidity}%</h4>
                </Col>

                <Col xs={6}>
                  <p className='text-muted my-0'>Wind</p>
                  <h4>
                    {wind.speed} <small>m/s</small>
                  </h4>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className='mb-2'>
            <Col xs={6}>
              <p className='text-muted my-0'>Weather</p>
              <h4>{weather[0].description}</h4>
            </Col>
            <Col xs={6}>
              <p className='text-muted my-0'>Temp today</p>
              <h4>placeholder...</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
                <Button variant='dark' onClick={() => props.openModal('weatherMap')}>
                    <i class="bi bi-globe-americas"></i> View map
                </Button>
            </Col>
            <Col xs={6}>
                <p>Last Updated at: <span className='text-primary'>{lastUpdated.toLocaleTimeString()}</span></p>
            </Col>
          </Row>

        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Environment;