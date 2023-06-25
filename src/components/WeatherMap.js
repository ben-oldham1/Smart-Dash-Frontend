import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

import Nav from 'react-bootstrap/Nav';

import L from 'leaflet';

const MapComponent = ({ settingsData }) => {

    const apiKey = settingsData["weatherApiKey"]
    const latitude = settingsData["lat"]
    const longitude = settingsData["long"]
    const zoom = settingsData["zoom"]

    const mapRef = useRef(null);
    
    
    function updateMap(eventKey) {
        const mapTypes = {
            "1": "precipitation_new",
            "2": "clouds_new",
            "3": "wind_new",
            "4": "temp_new",
        }

        // Update the active tab
        setActiveKey(eventKey)

        // Set the new map type based on the eventkey selected
        setMapType(mapTypes[eventKey])
    }

    const [mapType, setMapType] = useState("precipitation_new");
    const [activeKey, setActiveKey] = useState("1");
    const handleSelect = (eventKey) => updateMap(eventKey);

    
    useEffect(() => {
        const map = L.map(mapRef.current).setView([latitude, longitude], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.tileLayer(`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${apiKey}`).addTo(map);

        return () => {
            map.remove();
        };
    }, [apiKey, latitude, longitude, zoom, mapType]);

    return (
        <>
            <Nav className='mb-3' variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="1">
                        Precipitation
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2">
                        Clouds
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3">
                        Windspeed
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4">
                        Temperature
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
        </>
    );
};

export default MapComponent;