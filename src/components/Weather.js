import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TempGauge from './graphsAndCharts/TempGauge';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiUrl = `/weather`;

      try {
        setLastUpdated(new Date());

        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error('Error fetching weather data:', response.status);
        }
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

  const main = weatherData?.main || {};
  const weather = weatherData?.weather || [];
  const wind = weatherData?.wind || {};

  return (
    <Card bg='secondary' text='light' className='mb-3'>
      <Card.Body>
        <Card.Title>WEATHER</Card.Title>
        <hr className='border-gray mt-1' />
        <Card.Text>
          <Row className='mb-2'>
            <Col xs={4}>
              <p className='text-muted my-0'>Feels like</p>
              {weatherData ? (
                <h4>
                  {main.feels_like}
                  <small>°C</small>
                </h4>
              ) : (
                <h4>...</h4>
              )}
            </Col>

            <Col xs={4}>
              <p className='text-muted my-0'>Humidity</p>
              {weatherData ? (
                <h4>
                  {main.humidity}
                  <small>%</small>
                </h4>
              ) : (
                <h4>...</h4>
              )}
            </Col>

            <Col xs={4}>
              <p className='text-muted my-0'>Wind</p>
              {weatherData ? (
                <h4>
                  {wind.speed}
                  <small>m/s</small>
                </h4>
              ) : (
                <h4>...</h4>
              )}
            </Col>
          </Row>

          <Row className='mb-2'>
            <Col xs={5}>
              {weatherData ? (
                <TempGauge temp={main.temp} id={'outsideTemp'} />
              ) : (
                <h4>...</h4>
              )}
            </Col>
            <Col xs={7}>
              <p className='text-muted my-0'>Weather</p>
              {weatherData ? (
                <h4>{weatherData ? weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1) : '...'}</h4>
              ) : (
                <h4>...</h4>
              )}
            </Col>
          </Row>


          <hr className='border-gray my-1' />

          <Row className='mb-2'>
            <Col xs={5}>
              <div className='d-block mb-1'>
                {weatherData ? (
                  <small className='text-muted'>Updated <span> {lastUpdated.toLocaleTimeString()} </span></small>
                ) : (
                  <small className='text-muted'>Updating now...</small>
                )}
              </div>
            </Col>
          </Row>

        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Weather;