import React from 'react'
import './style.css'
import Day from './Day'
import { forecastDays as sfdata } from '../../data/san-francisco'
// import { forecastDays as nydata } from '../../data/new-york'

const Forecast = () => {

  const renderDays = sfdata('imperial').map((d, index) => {
    return <Day
      key={index}
      date={d.date}
      icon_url={d.icon_url}
      hi={d.hi}
      low={d.low}
      conditions={d.conditions}
      humidity={d.humidity}
      wind={d.wind}
    />
  })

  return (
    <div id="Forecast">
      <h2>Forecast</h2>
      <div id="day-wrapper">
        {renderDays}
      </div>
    </div>
  )
}
export default Forecast
