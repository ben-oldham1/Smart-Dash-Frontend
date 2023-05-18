import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tile from './components/Tile';
import Environment from './components/Environment';
import Today from './components/Today';
import News from './components/News';

function App() {
  return (
    <Container>

      <Row className='my-3'>

        {/* === Left column === */} 
        <Col xs={6}>

          <Row>
            <Tile title={'TODAY'}>
              <Today />
            </Tile>
          </Row>

          <Row>
            <Tile title={'ENVIRONMENT'}>
              <Environment />
            </Tile>
          </Row>

        </Col>


        {/* === Right column === */} 
        <Col xs={6}>
          <Row>
            <Tile title={'NEWS'}>
              <News />
            </Tile>
          </Row>

          <Row>
            <Tile title={'TRANSPORT'}>
              <Environment />
            </Tile>
          </Row>
        </Col>

      </Row>

    </Container>
  );
}

export default App;
