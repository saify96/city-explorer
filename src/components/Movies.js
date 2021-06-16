import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class Movies extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '25rem'  }}>
                    <Card.Img variant="top" src={this.props.movies.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.movies.title}</Card.Title>
                        <Card.Text>
                         {this.props.movies.overview}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>popularity : {this.props.movies.popularity} </ListGroupItem>
                        <ListGroupItem>Total Votes : {this.props.movies.total_votes} </ListGroupItem>
                        <ListGroupItem>Average Votes : {this.props.movies.average_votes} </ListGroupItem>
                        <ListGroupItem>Released On : {this.props.movies.released_on} </ListGroupItem>
                    </ListGroup>
                    {/* <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                </Card>
            </div>
        )
    }
}

export default Movies
