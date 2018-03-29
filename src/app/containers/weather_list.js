import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class WeatherList extends Component {

  renderWeather(cityData) {
    if (!cityData || !cityData.city) return;

    const name = cityData.city.name

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
      if (!item || !item.city) return
      return item.city.name
    });
  }

  showHeadings() {
    if (!this.props.weather.length)
      return false

    return true
  }

  render() {
    return  (
      <table className="table table-hover">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={500}
          transitionAppear={true}
          component="thead"
        >
          {this.showHeadings() && (<tr>
            <th>City</th>
            <th>Temperature (c)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>)}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={500}
          transitionAppear={true}
          component="tbody"
        >
          {this.uniqueCities(this.props.weather).map(this.renderWeather)}
        </ReactCSSTransitionGroup>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return  { weather }; // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);