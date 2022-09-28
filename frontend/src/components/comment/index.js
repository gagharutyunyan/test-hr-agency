import React from 'react'
import './style.css'

export const Comment = ({ user, text }) => {
  return (
    <div className="articleComment">
      <h3>{user}</h3>
      <p>{text}</p>
    </div>
  )
}
