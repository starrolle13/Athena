import React from 'react'
import Button from './Button'
import Card from './Card'
import './cardContainer.css'

export default function CardContainer(props) {
  return (
    <div className='cardContainer'>
        <div className='headerContainer'>
          <h1 className='header'>{props.title}</h1>
          <h2 className='subtitle'>{props.subtitle}</h2>
        </div>   
        <Card content={props.content}/>
        <Button />
    </div>
  )
}
