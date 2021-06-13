import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class ShowingInfo extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.9c870abbddee1186d4eedf621331a2b2&q&center=${this.props.cityInfo.lat},${this.props.cityInfo.lon}&zoom=20`}/>
                        <Card.Body>
                            <Card.Title>{this.props.cityInfo.display_name}</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text> */}
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Latitude: {this.props.cityInfo.lat}</ListGroupItem>
                            <ListGroupItem>Longitude: {this.props.cityInfo.lon}</ListGroupItem>
                        </ListGroup>
                        {/* <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body> */}
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ShowingInfo
