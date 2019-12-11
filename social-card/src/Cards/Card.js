import React from 'react'
import './card-style.css'

const Card = props => {
    return (
    <div className="card text-center shadow border-secondary mb-3">
            <div className='overflow'>
                <img src={props.imgsrc} alt='' className='card-img-top' height='600' width='300'/>
            </div>
        <div className='card-body text-dark card-header'>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text text-secondary'>{props.txt}</p>
            <h6 className='card-subtitle mb-2 text-muted'>If you want to get better at something, choose small projects</h6>
            <button type='button' class='btn btn-outline-dark'>{props.chat}</button>
            <button type='button' class='btn btn-outline-dark'>Like</button>
            <button type='button' class='btn btn-outline-dark'>Like</button>
            <button type='button' class='btn btn-outline-dark'>Like</button>
        </div>
    </div>
    )
}

export default Card