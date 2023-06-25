import logo from './logo.svg';

import { useState, useEffect } from 'react';
import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Today from "./components/Today.js";
import Environment from "./components/Environment.js";
import Plants from "./components/Plants.js";
import Forecast from "./components/Forecast.js";
import MapComponent from './components/WeatherMap.js';
import Bins from './components/Bins';
import Bus from './components/Bus';
import Speedtest from './components/Speedtest';
import SettingsForm from './components/SettingsForm';

import ModalComponent from "./components/DarkModal.js";

function App() {

  // Modal control state and functions

  const [modals, setModals] = useState({});

  const openModal = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: true,
    }));
  };

  const closeModal = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));
  };



  // Load settings data from environment variables
  const [settingsData, setSettingsData] = useState({
    "weatherApiKey": process.env.REACT_APP_WEATHER_API_KEY,
    "lat": process.env.REACT_APP_LAT,
    "long": process.env.REACT_APP_LONG,
    "zoom": process.env.REACT_APP_ZOOM,
    "city": process.env.REACT_APP_CITY,
    "country": process.env.REACT_APP_COUNTRY,
  });


  return (
    <>
      <div className='container-fluid py-3'>
        <Row>

          <Col xs={3}>

            <Today />

            <Bins />

            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
              <Card.Body>
                <Card.Title>Devices</Card.Title>
                <Card.Text>
                  <Row>
                    <Col xs={6}>

                      <Button variant='dark' onClick={() => openModal('settings')}>
                        <i class="bi bi-gear"></i> Settings
                      </Button>

                    </Col>
                  </Row>

                </Card.Text>
              </Card.Body>
            </Card>

            <Speedtest />

          </Col>

          <Col xs={5}>

            <Environment openModal={openModal} settingsData={settingsData} />

            <Plants />

            <Forecast />

          </Col>

          <Col xs={4}>

            <Bus />

            <Card bg={'secondary'} text={'light'} className={'mb-3'}>
              <Card.Body>
                <Card.Title>NEWS HEADLINES</Card.Title>
                <Card.Text>
                  <Row>
                    <Col xs={12}>

                      <Table hover variant='dark'>
                        <tbody>
                          <tr>
                            <td>Titanic sub</td>
                          </tr>
                          <tr>
                            <td>Titanic sub</td>
                          </tr>
                          <tr>
                            <td>Titanic sub</td>
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

      {modals.weatherMap && (
        <ModalComponent
          size="lg"
          title="Weather Map"
          onClose={() => closeModal('weatherMap')}>

          <MapComponent settingsData={settingsData} />

        </ModalComponent>
      )}

      {modals.settings && (
        <ModalComponent
          size=""
          title="Settings"
          onClose={() => closeModal('settings')}>

          <SettingsForm setSettingsData={setSettingsData} settingsData={settingsData} />

        </ModalComponent>
      )}

    </>
  );
}

export default App;
