import React, { Component } from 'react'
import Card from './Card'
import game from './Text'

function Cards(props) {
   return ( <div>
        { game.map((props) => {
           return <div className='container-fluid d-flex justify-content-center'>
                <Card 
                    imgsrc={props.photo} 
                    title={props.title} 
                    txt={props.msg}
                />
            </div>
        }
        )
    } 
    </div>
    )
}


export default Cards