import React, { Component } from 'react'
import Card from './Card'
import img1 from '../assets/36539-2-chrono-trigger-photos.png'
import chatImg from '../assets/chat.png'
import chrono from './Text'

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <Card 
                    imgsrc={img1} 
                    title='Chrono Trigger' 
                    txt={chrono.chronTrigger}
                />
            </div>
        )
    }
}

export default Cards