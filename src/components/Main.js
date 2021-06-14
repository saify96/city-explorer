import React, { Component } from 'react'
import CityForm from './CityForm'
import ShowingInfo from './ShowingInfo'
import axios from 'axios';
import ErrorMsg from './ErrorMsg'


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
        }
    }

    getCityName = (e) => {
        this.setState({
            cityName: e.target.value,
        })
    }

    CityData = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.9c870abbddee1186d4eedf621331a2b2&q=${this.state.cityName}&format=json`)
            this.setState({
                cityInfo: data.data[0],
                showData: true,  
                showError: false,
            })
        }
    catch(error) {
        this.setState({
            showError: true,
            errorMsg: error.message,
        })
    }
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
            </div>
        )
    }
}

export default main
