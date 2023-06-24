import { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';


export default function Bus(props) {

    function updateMap(eventKey) {
        const mapTypes = {
            "1": "UWE-SB",
            "2": "stoke-SB",
            "3": "centre-NB",
            "4": "cabot-NB",
        }

        // Update the active tab
        setActiveKey(eventKey)

        // Set the new map type based on the eventkey selected
        setMapType(mapTypes[eventKey])
    }

    const [mapType, setMapType] = useState("stoke-SB");
    const [activeKey, setActiveKey] = useState("1");
    const handleSelect = (eventKey) => updateMap(eventKey);


    // Retrieve the data from Flask API
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch('/profile/' + mapType)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setResponseData(data);
                    } else {
                        console.error('Response data is not an array:', data);
                    }
                })
                .catch(error => console.error(error));
                console.log('update')
        };
        
        // Fetch data initially
        fetchData();

        // Fetch data every 30 minutes
        const interval = setInterval(fetchData, 30 * 60 * 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [mapType]);



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
                                        Stoke Park (SB)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">
                                        City Centre (NB)
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">
                                        Cabot Circus (NB)
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>

                            <Table striped hover variant="dark">
                                <tbody>
                                    {responseData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.headsign}</td>
                                            <td>{item.lineName}</td>
                                            <td>{item.scheduledDepartureTime}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>


                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <small>Updated [placeholder] mins ago</small>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </>
    )
}