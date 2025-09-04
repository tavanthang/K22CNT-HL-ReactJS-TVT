import React from 'react'

export default function TvtFuncComp(tvtProps) {
  return (
    <div className='alert alert-danger'>
        <h2>Function Component Demo</h2>
        <h3>Welcome to, {tvtProps.name} - {tvtProps.age}</h3>
    </div>
  )
}