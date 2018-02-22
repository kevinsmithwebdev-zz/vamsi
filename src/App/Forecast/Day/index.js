import React from 'react'
import './style.css'

const Day = ({ date, icon_url, hi, low, conditions, humidity, wind }) => {
  return (
    <div id='Day'>
      <div id ="Day-date">{date}</div>
      <div id="Day-stats">
        <div>{hi} / {low}</div>
        <div>{conditions}</div>
        <div>Humidity: {humidity}</div>
        <div>Wind: {wind}</div>
      </div>
      <div id = "Day-conditions-image-wrapper"><img src={icon_url} alt='conditions' height="auto" width="90" /></div>
    </div>
  )
}
export default Day
