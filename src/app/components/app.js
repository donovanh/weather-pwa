import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

const NetworkMessage = () => {
  if (typeof window === 'undefined') return null
  const online = window.navigator.onLine
  let message = ''
  if (!online) message = 'You are offline'
  
  return (
    <div className="network-message">{message}</div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <NetworkMessage />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
