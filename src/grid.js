import React, { Component } from 'react'
import "./grid.scss"

export default class Grid extends Component {
    render() {
        return (
            <div className='row'>
                <div  className='col-1'>col1</div>
                <div  className='col-2'>col2</div>
                <div  className='col-3'>col3</div>
                <div  className='col-4'>col4</div>
                <div  className='col-5'>col5</div>
            </div>
        )
    }
}
