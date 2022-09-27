import React from 'react'
import cn from 'classnames'
import './style.css'

export const Button = ({ type = 'button', to, className, primary, wrong, children, isLoading, ...props }) => {
  return (
    <button type={type} className={cn('btn', className, { wrong })} {...props}>
      {children}
    </button>
  )
}
