import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export class CityForm extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.props.CityData}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Choose A City</Form.Label>
                            <Form.Control onChange={this.props.getCityName} type="text" placeholder="write the city name here" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            EXPLORE
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default CityForm
