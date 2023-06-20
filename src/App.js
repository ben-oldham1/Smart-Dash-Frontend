import logo from './logo.svg';
import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Today from "./components/Today.js";
import Environment from "./components/Environment.js";
import InternetSpeed from "./components/InternetSpeed.js";
import SpeedTest from "./components/SpeedTestComponent.js";

function App() {

  // Modal stuff
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='container-fluid py-3'>
        <Row>

          <Col xs={3}>

            <Today />

            <InternetSpeed />

            <SpeedTest />

          </Col>

          <Col xs={5}>

            <Environment />

            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
              <Card.Body>
                <Card.Title>Devices</Card.Title>
                <Card.Text>
                  <Row className='mb-3'>
                    <Col xs={6}>
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label" for="customSwitch1">Fan</label>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                        <label class="custom-control-label" for="customSwitch2">Sunset light</label>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <Button variant="dark" onClick={handleShow}>
                        Edit device list
                      </Button>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>

          <Col xs={4}>
            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
              <Card.Body>
                <Card.Title>Bus</Card.Title>
                <Card.Text>
                  <Row>
                    <Col xs={12}>

                      <Table striped hover variant="dark">
                        <tbody>
                          <tr>
                            <td>M4</td>
                            <td>City Centre</td>
                            <td>13:45</td>
                          </tr>
                          <tr>
                            <td>M1</td>
                            <td>City & Hengrove</td>
                            <td>13:49</td>
                          </tr>
                          <tr>
                            <td>M3</td>
                            <td>Emersons Green</td>
                            <td>14:09</td>
                          </tr>
                        </tbody>
                      </Table>

                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
              <Card.Body>
                <Card.Title>Train</Card.Title>
                <Card.Text>
                  <Row>
                    <Col xs={12}>

                      <Table striped hover variant="dark">
                        <tbody>
                          <tr>
                            <td>13:45</td>
                            <td>Weymouth</td>
                            <td>Platform 2</td>
                          </tr>
                          <tr>
                            <td>15:29</td>
                            <td>Plymouth</td>
                            <td>Platform 1</td>
                          </tr>
                          <tr>
                            <td>16:32</td>
                            <td>Birmingham New St</td>
                            <td>Platform 3</td>
                          </tr>
                        </tbody>
                      </Table>

                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className='bg-secondary text-light border-dark'>
          <Modal.Title>Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-secondary text-light border-dark'>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer className='bg-secondary text-light border-dark'>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
