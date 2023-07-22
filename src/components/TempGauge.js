import React, { Component } from 'react';
import GaugeChart from 'react-gauge-chart'


export default function TempGauge(props) {

    const temp = props.temp;

    function mapTempToPercent(temp){
        // If the temp is outside range, we'll just set it to the min/max value
        if (temp > 35) {
            temp = 35
        } else if (temp < -5) {
            temp = -5
        }

        // Map the temperature to a percentage
        var temperature_difference = temp - (-5)
        var percentage_value = (temperature_difference / 40) * 100 + 0

        // Round it
        percentage_value = Math.round(percentage_value)

        // Return the value as decimal
        return percentage_value / 100
    }

    const chartStyle = {
        width: '100%',
        margin: 'auto',
    }

    /* 
        arcsLength={[0.12, 0.38, 0.2, 0.1, 0.2]}
        colors={['#3D6BB2', '#7BCBB5', '#53BA47', '#F47B21', '#E72E2E']}
        arcPadding={0.05}
        cornerRadius={3}
    */

    return (
        <GaugeChart id={props.id}
            style={chartStyle}
            arcsLength={[0.12, 0.32, 0.25, 0.16, 0.15]}
            colors={['#3D6BB2', '#7BCBB5', '#53BA47', '#F47B21', '#E72E2E']}
            arcPadding={0.05}
            cornerRadius={3}
            percent={mapTempToPercent(temp)}
            marginInPercent={0.01}
            formatTextValue={value => temp+'°C'}
        />
    )
}
