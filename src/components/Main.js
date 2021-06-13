import React, { Component } from 'react'
import CityForm from './CityForm'
import ShowingInfo from './ShowingInfo'
import axios from 'axios';

export class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityInfo: {},
            showData: false,
        }
    }

    getCityName = (e) => {
        this.setState({
            cityName: e.target.value,
        })
        // console.log(this.state.cityName)
    }

    CityData = async (e) => {
        e.preventDefault();
        const data = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.9c870abbddee1186d4eedf621331a2b2&q=${this.state.cityName}&format=json`)
        // console.log(data);
        this.setState({
            cityInfo: data.data[0],
            showData: true,
        })
        // console.log(this.state.cityInfo)
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
            </div>
        )
    }
}

export default main
