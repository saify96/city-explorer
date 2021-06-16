import React, { Component } from 'react'
import CityForm from './CityForm'
import ShowingInfo from './ShowingInfo'
import axios from 'axios';
import ErrorMsg from './ErrorMsg'
import WeatherF from './WeatherF'
import Movies from './Movies'

export class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityInfo: {},
            showData: false,
            mapData: {},
            showError: false,
            errorMsg: '',
            weather: [],
            movies: [],

        }
    }

    getCityName = (e) => {
        this.setState({
            cityName: e.target.value,
        })
    }

    CityData = async (e) => {
        e.preventDefault();
        await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_api_key}&q=${this.state.cityName}&format=json`)
            .then((response) => {
                this.setState({
                    cityInfo: response.data[0],
                    showData: true,
                    showError: false,
                })
            })
            .catch((error) => {
                this.setState({
                    showError: true,
                    errorMsg: error.message,
                })
            })
        axios.get(`${process.env.REACT_APP_URL}/weather?lon=${this.state.cityInfo.lon}&lat=${this.state.cityInfo.lat}`)
            .then((response) => {
                this.setState({
                    weather: response.data
                })
            })
            .catch((error) => {
                this.setState({
                    showError: true,
                    errorMsg: error.message,
                })
            })
            axios.get(`${process.env.REACT_APP_URL}/movies?city=${this.state.cityName}`)
            .then((response) => {
                this.setState({
                    movies: response.data
                })
           })
            .catch((error) => {
                this.setState({
                    showError: true,
                    errorMsg: error.message,
                })
            })

    }
    render() {
        return (
            <div>
                <CityForm
                    getCityName={this.getCityName}
                    CityData={this.CityData}
                />
                {
                    this.state.showData &&
                    <ShowingInfo
                        cityInfo={this.state.cityInfo}
                    />
                }
                {this.state.showError &&
                    <ErrorMsg
                        errorMsg={this.state.errorMsg}
                    />
                }
                {
                    this.state.weather.map((item) => <WeatherF date={item.date} desc={item.desc} />)
                }
                {
                    this.state.movies.map((item) => <Movies movies={item} />)
                }
            </div>
        )
    }
}

export default main
