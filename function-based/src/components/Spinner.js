import React, { Component } from 'react'
import loading from './ajax-loader'

const Spinner =()=> {
    
        return (
            <div>
                <img src={loading} alt="loading" />
            </div>
        )
    
}

export default Spinner
