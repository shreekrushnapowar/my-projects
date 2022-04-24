import React, { Component } from 'react'
import loading from './ajax-loader'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
