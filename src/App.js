import logo from './logo.svg';

import { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Today from "./components/Today.js";
import Weather from "./components/Weather.js";
import News from "./components/News.js";
import Forecast from "./components/Forecast.js";
import Bus from './components/Bus';
import Speedtest from './components/Speedtest';
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
              <Weather />
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

    </>
  );
}

export default App;
