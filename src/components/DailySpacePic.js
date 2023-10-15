import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Collapse, Alert } from 'react-bootstrap';

const SpaceImage = ({ data }) => (
  <Row>
    <Col xs={12}>
      {data ? <img className='img-fluid space-img mb-2' src={data.url} alt='Image of space' /> : '...'}
    </Col>
  </Row>
);

const DailySpacePic = (props) => {
  const [dailySpacePicData, setDailySpacePicData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchSpacePicData = async () => {
      const apiUrl = `/dailyspacepic`;

      try {
        setLastUpdated(new Date());

        const response = await fetch(apiUrl);
        const data = await response.json();

        setDailySpacePicData(data);
      } catch (error) {
        console.error('Error fetching space pic data:', error);
      }
    };

    fetchSpacePicData();

    const interval = setInterval(fetchSpacePicData, 360 * 60 * 1000); // Fetch data every 6 hours

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card bg='secondary' text='light' className='mb-3'>
      <Card.Body>
        <Card.Title>DAILY SPACE PIC</Card.Title>
        <hr className='border-gray mt-1' />
        <Card.Text>
          <SpaceImage data={dailySpacePicData} />

          <Row>
            <Col xs={12}>
              <h4>{dailySpacePicData ? dailySpacePicData.title : '...'}</h4>
            </Col>
          </Row>

          <hr className='border-gray my-1' />

          <Row>
            <Col xs={12}>
              <small className='text-muted'>
                Copyright:
                {dailySpacePicData ? dailySpacePicData.copyright : '...'} (via NASA)
              </small>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DailySpacePic;