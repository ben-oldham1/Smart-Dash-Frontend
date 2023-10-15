import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';

const LineGraph = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '60px' }}>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={60}
          data={data}
        >
          
          <Line type="monotone" dataKey="download" stroke="#007bff" />
          <Line type="monotone" dataKey="upload" stroke="#dc3545" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default LineGraph;
