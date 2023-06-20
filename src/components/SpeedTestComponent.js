import React, { useEffect, useState } from 'react';

const SpeedTest = () => {
  const [downlinkSpeed, setDownlinkSpeed] = useState(null);
  const [downlinkType, setDownlinkType] = useState(null);

  useEffect(() => {
    const calculateSpeed = () => {
      if (navigator.connection) {
        const { downlink, effectiveType } = navigator.connection;
        setDownlinkSpeed(downlink);
        setDownlinkType(effectiveType);
      }
    };

    calculateSpeed();

    // Update the speed and type on change
    navigator.connection.addEventListener('change', calculateSpeed);

    // Clean up event listener on component unmount
    return () => {
      navigator.connection.removeEventListener('change', calculateSpeed);
    };
  }, []);

  return (
    <div className='text-light'>
      <h2>Network Speed Test</h2>
      {downlinkSpeed && downlinkType ? (
        <div>
          <p>Downlink Speed: {downlinkSpeed} Mbps</p>
          <p>Downlink Type: {downlinkType}</p>
        </div>
      ) : (
        <p>Loading network information...</p>
      )}
    </div>
  );
};

export default SpeedTest;
