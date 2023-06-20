import React, { Component } from 'react';
import GaugeChart from 'react-gauge-chart'


export default function SpeedGauge(props) {

    const speed = props.speed;

    function mapSpeedToPercent(speedPercent){
        // Range
        // Need to figure out how this function works

        // If the speed is outside range, we'll just set it to the min/max value
        if (speedPercent > 100) {
            speedPercent = 100
        } else if (speedPercent < 0) {
            speedPercent = 0
        }

        // Round it
        speedPercent = Math.round(speedPercent)

        // Return the value as decimal
        return (speedPercent / 100)
    }

    const chartStyle = {
        width: '85%',
        margin: 'auto',
    }


    return (
        <GaugeChart id={props.id}
            style={chartStyle}
            nrOfLevels={20} 
            colors={['#E72E2E', '#53BA47']}
            percent={mapSpeedToPercent(speed)}
            marginInPercent={0.01}
            formatTextValue={value => speed+' Mbps'}
        />
    )
}
