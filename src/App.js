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
import Weather from "./components/Weather.js";
import News from "./components/News.js";
import Plants from "./components/Plants.js";
import Forecast from "./components/Forecast.js";
import MapComponent from './components/WeatherMap.js';
import Bus from './components/Bus';
import Speedtest from './components/Speedtest';
import SettingsForm from './components/SettingsForm';
import Devices from './components/Devices';
import DailySpacePic from './components/DailySpacePic';

import ModalComponent from "./components/DarkModal.js";

import TileConfig from './TileConfig.json';
import Suncycle from './components/Suncycle';

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
      <div className='container-fluid'>
        <Row className="gutter-small">

          <Col xs={4} className={'height-100vh py-3 overflow-auto'}>
            {TileConfig.showtiles.Today &&
              <Today />
            }

            {TileConfig.showtiles.Bus &&
              <Bus />
            }

          </Col>

          <Col xs={3} className={'height-100vh py-3 overflow-auto'}>

            {TileConfig.showtiles.Devices &&
              <Devices openModal={openModal} />
            }

            {TileConfig.showtiles.Plants &&
              <Plants />
            }

            {TileConfig.showtiles.Speedtest &&
              <Speedtest />
            }

            {TileConfig.showtiles.Suncycle &&
              <Suncycle />
            }

            {TileConfig.showtiles.DailySpacePic &&
              <DailySpacePic />
            }
          </Col>

          <Col xs={5} className={'height-100vh py-3 overflow-auto'}>
            {TileConfig.showtiles.Weather &&
              <Weather openModal={openModal} settingsData={settingsData} />
            }

            {TileConfig.showtiles.Forecast &&
              <Forecast />
            }

            {TileConfig.showtiles.News &&
              <News />
            }

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
