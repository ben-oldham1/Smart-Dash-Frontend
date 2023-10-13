import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';

const LineGraph = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '100px' }}>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={100}
          data={data}
        >
          <XAxis dataKey="time" />
          <Line type="monotone" dataKey="download" stroke="#007bff" />
          <Line type="monotone" dataKey="upload" stroke="#dc3545" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default LineGraph;
