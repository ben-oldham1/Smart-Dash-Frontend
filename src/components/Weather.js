import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TempGauge from './TempGauge';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiUrl = `/weather`;

      try {
        setLastUpdated(new Date());

        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 20 * 60 * 1000); // Fetch data every 15 minutes

    return () => {
      clearInterval(interval);
    };
  }, []);

  const main = weatherData?.main;
  const weather = weatherData?.weather;
  const wind = weatherData?.wind;

  return (
    <Card bg={'secondary'} text={'light'} className={'mb-3'}>
      <Card.Body>
        <Card.Title>WEATHER</Card.Title>
        <Card.Text>
          <Row className='mb-2'>

            <Col xs={5}>
              {weatherData ? (
                <TempGauge temp={main.temp} id={'outsideTemp'} />
              ) : (
                <h4>...</h4>
              )}
            </Col>

            <Col xs={7}>
              <Row>
                <Col xs={6}>
                  <p className='text-muted my-0'>Feels like</p>
                  {weatherData ? (
                    <h4>
                      {main.feels_like}
                      <small>°C</small>
                    </h4>
                  ) : (
                    <h4>...</h4>
                  )}

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

                <Col xs={6}>
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
            </Col>
          </Row>

          <Row className='mb-2'>
            <Col xs={5}>
              <div className='d-block mb-1'>
                {weatherData ? (
                  <small className='text-muted'>Updated <span> {lastUpdated.toLocaleTimeString()} </span></small>
                ) : (
                  <small className='text-muted'>Updating now...</small>
                )}
              </div>

              <Button variant='dark' onClick={() => props.openModal('weatherMap')}>
                <i className="bi bi-globe-americas"></i> View map
              </Button>
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

        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Weather;
