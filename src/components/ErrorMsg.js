import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class ErrorMsg extends Component {
    render() {
        return (
            <div>
                <Alert variant='danger'>
                    {this.props.errorMsg}
                </Alert>
            </div>
        )
    }
}

export default ErrorMsg
