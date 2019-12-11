import React, { Component } from 'react'
import Card from './Card'
import img1 from '../assets/36539-2-chrono-trigger-photos.png'
import chatImg from '../assets/'

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
            <Card imgsrc={img1} title='Chrono Trigger' txt='A classic game for SNES, Chrono Trigger remains
                                        fantastic and is consistently rated
                                        one of the greatest games of all time!'
                                        />
            </div>
        )
    }
}

export default Cards