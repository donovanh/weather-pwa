import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import _ from 'lodash'

class WeatherList extends Component {

  renderWeather(cityData) {
    if (!cityData) return;

    const name = cityData.city.name;

    const temps = cityData.list.map(weather => {
      return weather.main.temp - 273.15
    })
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="#aaa" units="c" /></td>
        <td><Chart data={pressures} color="#aaa" units="hPa" /></td>
        <td><Chart data={humidities} color="#aaa" units="%" /></td>
      </tr>
    )
  }

  uniqueCities(cityArray) {
    return _.uniqBy(cityArray, (item) => {
      return item.city.name
    });
  }

  render() {
    return  (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (c)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather && this.uniqueCities(this.props.weather).map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return  { weather }; // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);