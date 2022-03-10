import React from 'react'
import CardBody from './CardBody'
import CardImage from './CardImage'

export default function Card() {
  return (
    <div className="card">
      <CardImage/>
      <CardBody/>
    </div>
  )
}
