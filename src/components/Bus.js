import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { Button, Collapse, Alert } from 'react-bootstrap';

const BusDepartureItem = ({ lineName, headsign, scheduledDepartureTime }) => (
  <tr>
    <td>{lineName}</td>
    <td>{headsign}</td>
    <td>{scheduledDepartureTime}</td>
  </tr>
);

export default function Bus(props) {
  const [stopName, setStopName] = useState("stoke-SB");
  const [activeKey, setActiveKey] = useState("3");
  const [responseData, setResponseData] = useState([]);
  const [alertData, setAlertData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const updateMap = (eventKey) => {
    const stopNames = {
      "1": "UWE-SB",
      "2": "UWE-NB",
      "3": "stoke-SB",
      "4": "centre-NB",
      "5": "cabot-NB",
    };

    setActiveKey(eventKey);
    setStopName(stopNames[eventKey]);
    setResponseData([]);
  };

  const handleSelect = (eventKey) => updateMap(eventKey);

  const handleButtonClick = () => {
    setShowAlert(!showAlert);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch('/busdata/' + stopName)
        .then(response => response.json())
        .then(data => {
          const { buses, alerts } = data;
          if (Array.isArray(buses)) {
            setResponseData(buses);
            setAlertData(alerts);
            setLastUpdated(new Date());
          } else {
            console.error('Response data is not an array:', data);
          }
        })
        .catch(error => console.error(error));
    };

    fetchData();

    const interval = setInterval(fetchData, 20 * 60 * 1000);

    return () => clearInterval(interval);
  }, [stopName]);

  return (
    <>
      <Card bg="secondary" text="light" className="mb-3">
        <Card.Body>
          <Card.Title>BUS DEPARTURES</Card.Title>
          <hr className="border-gray my-1" />

          <Row>
            <Col xs={12}>
              <Nav className="mb-3 mt-2" variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                <Nav.Item>
                  <Nav.Link eventKey="1">UWE (SB)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">UWE (NB)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Stoke Park (SB)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">City Centre (NB)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">Cabot Circus (NB)</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              {alertData ? (
                <div>
                  <Button variant="dark" className="mb-3" onClick={handleButtonClick}>
                    <i className="bi bi-exclamation-circle"></i> Disruption alert
                  </Button>

                  <Collapse in={showAlert}>
                    <div>
                      <Alert className="bg-dark text-light border-warning" onClose={handleButtonClick}>
                        {alertData}
                      </Alert>
                    </div>
                  </Collapse>
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Table striped hover variant="dark">
                <tbody>
                  {responseData.map((item, index) => (
                    <BusDepartureItem key={index} {...item} />
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
        </Card.Body>
      </Card>
    </>
  );
}