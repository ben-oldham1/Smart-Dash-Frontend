import React, { useState, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const NewsItem = ({ title, link }) => (
  <tr>
    <td>{title}</td>
    <td>
      <a href={link}>
        <Button variant="secondary">Read</Button>
      </a>
    </td>
  </tr>
);

const News = () => {
  const [responseData, setResponseData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [dataAvailable, setDataAvailable] = useState(true);

  const fetchData = () => {
    console.log('Fetching news');
    fetch('/news')
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        if (Array.isArray(results)) {
          setResponseData(results);
          setLastUpdated(new Date());
          setDataAvailable(true);
          console.log(results);
        } else {
          console.error('Response data is not an array:', data);
          setDataAvailable(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setDataAvailable(false);
      });
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Card bg="secondary" text="light" className="mb-3">
        <Card.Body>
          <Card.Title>NEWS HEADLINES</Card.Title>
          <hr className="border-gray my-1" />
          <Card.Text className="mt-3">
            {dataAvailable ? (
              <div>
                <Row>
                  <Col xs={12}>
                    <Table striped hover variant="dark">
                      <tbody>
                        {responseData.map((item, index) => (
                          <NewsItem key={index} {...item} />
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <hr className="border-gray my-1" />
                <Row>
                  <Col xs={12}>
                    {responseData.length > 0 ? (
                      <small className="text-muted">
                        Updated <span>{lastUpdated.toLocaleTimeString()}</span>
                      </small>
                    ) : (
                      <small className="text-muted">Updating now...</small>
                    )}
                  </Col>
                </Row>
              </div>
            ) : (
              <Row>
                <Col xs={12}>
                  <p>Data not available</p>
                </Col>
              </Row>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default News;