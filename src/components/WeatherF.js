import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export class WeatherF extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item>{this.props.date} --- {this.props.desc}</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default WeatherF
