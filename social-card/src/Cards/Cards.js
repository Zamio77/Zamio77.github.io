import React, { Component } from 'react'
import Card from './Card'
import game from './Text'

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <Card 
                    imgsrc={game.photo} 
                    title={game.title} 
                    txt={game.chronTrigger}
                />
            </div>
        )
    }
}

export default Cards