import React from 'react'
import './card-style.css'

const Card = props => {
    <div className="card text-center shadow">
        <div className='overflow'>
            <img src={props.imgsrc} alt='' className='card-img-top' />
        </div>
        <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>{props.txt}</p>
        <h6 className='card-subtitle mb-2 text-muted'>If you want to get better at something, choose small projects</h6>
        </div>
    </div>
}

export default Card