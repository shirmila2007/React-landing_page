import React from 'react'

export default function Card({name,type,country,img}) {
  return (

    <div className="card">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
    
  )
}
