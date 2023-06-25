import React, { Component } from 'react';
import GaugeChart from 'react-gauge-chart'


export default function HumidityGauge(props) {

    const temp = props.temp;

    const chartStyle = {
        width: '100%',
        margin: 'auto',
    }

    return (
        <GaugeChart id={props.id}
            style={chartStyle}
            arcsLength={[0.2, 0.5, 0.3]}
            colors={['#F47B21', '#53BA47', '#7BCBB5']}
            arcPadding={0.05}
            cornerRadius={3}
            percent={(temp/100)}
            marginInPercent={0.01}
            formatTextValue={value => temp+'%'}
        />
    )
}
