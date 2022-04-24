import React, { Component } from 'react'
import loading from './loading.gif.gif'
export class Spin extends Component {
    render() {
        return (
            <div className="textcenter">
                 <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spin
