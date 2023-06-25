import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function SettingsForm(props) {
    return (
        <>
            <Row className='mb-3'>
                <Col xs={6}>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={props.settingsData["city"]} />
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" value={props.settingsData["country"]} />
                    </Form.Group>
                </Col>
            </Row>


            <Row className='mb-3'>
                <Col xs={4}>
                    <Form.Group controlId="lat">
                        <Form.Label>Lat</Form.Label>
                        <Form.Control type="number" value={props.settingsData["lat"]} />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group controlId="long">
                        <Form.Label>Long</Form.Label>
                        <Form.Control type="number" value={props.settingsData["long"]} />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group controlId="zoom">
                        <Form.Label>Zoom</Form.Label>
                        <Form.Control type="number" value={props.settingsData["zoom"]} />
                    </Form.Group>
                </Col>
            </Row>


            <Row>
                <Col xs={12}>
                    <Form.Group controlId="weatherApiKey">
                        <Form.Label>Weather API key</Form.Label>
                        <Form.Control type="text" value={props.settingsData["weatherApiKey"]} />
                    </Form.Group>
                </Col>
            </Row>

        </>
    )
}
