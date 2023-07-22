import { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { Button, Collapse, Alert } from 'react-bootstrap';


export default function Bus(props) {

    function updateMap(eventKey) {
        const stopNames = {
            "1": "UWE-SB",
            "2": "UWE-NB",
            "3": "stoke-SB",
            "4": "centre-NB",
            "5": "cabot-NB",
        }

        // Update the active tab
        setActiveKey(eventKey)

        // Set the new map type based on the eventkey selected
        setStopName(stopNames[eventKey])
    }

    const [stopName, setStopName] = useState("stoke-SB");
    const [activeKey, setActiveKey] = useState("3");
    const handleSelect = (eventKey) => updateMap(eventKey);


    // Retrieve the data from Flask API
    const [responseData, setResponseData] = useState([]);
    const [alertData, setAlertData] = useState([]);

    const [lastUpdated, setLastUpdated] = useState(null);


    useEffect(() => {
        const fetchData = () => {
            fetch('/busdata/' + stopName)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data['buses'])) {
                        setResponseData(data['buses']);
                        setAlertData(data['alerts']);
                        setLastUpdated(new Date());
                    } else {
                        console.error('Response data is not an array:', data);
                    }
                })
                .catch(error => console.error(error));
            console.log('update')
            console.log(responseData)
            console.log(alertData)
        };

        // Fetch data initially
        fetchData();

        // Fetch data every 30 minutes
        const interval = setInterval(fetchData, 30 * 60 * 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [stopName]);


    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        setShowAlert(!showAlert);
    };


    return (
        <>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
                <Card.Body>
                    <Card.Title>BUS DEPARTURES</Card.Title>

                    <Row>
                        <Col xs={12}>

                            <Nav className='mb-3' variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="1">
                                        UWE (SB)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">
                                        UWE (NB)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">
                                        Stoke Park (SB)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">
                                        City Centre (NB)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5">
                                        Cabot Circus (NB)
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>

                        <Col xs={12}>
                            {alertData ? (
                                <div>
                                    <Button variant="dark" className='mb-3' onClick={handleButtonClick}>
                                        <i class="bi bi-exclamation-circle"></i> Disruption alert
                                    </Button>

                                    <Collapse in={showAlert}>
                                        <div>
                                            <Alert className='bg-dark text-light border-warning' onClose={handleButtonClick}>
                                                {alertData}
                                            </Alert>
                                        </div>
                                    </Collapse>
                                </div>
                            ) : ("")}
                        </Col>

                        <Col xs={12}>

                            <Table striped hover variant="dark">
                                <tbody>
                                    {responseData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.lineName}</td>
                                            <td>{item.headsign}</td>
                                            <td>{item.scheduledDepartureTime}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                        </Col>

                    </Row>
                    <Row>
                        <Col xs={12}>
                            {responseData.length > 0 ? (
                                <small className='text-muted'>Updated <span> {lastUpdated.toLocaleTimeString()} </span></small>
                            ) : (
                                <small className='text-muted'>Updating now...</small>
                            )}
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </>
    )
}