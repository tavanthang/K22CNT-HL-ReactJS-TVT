import React from 'react'
import TvtUseState from './components/TvtUseState'
import TvtListStudent from './components/TvtListStudent'

export default function TvtApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Ta Van Thang]</h1>
        <hr/>

        <TvtUseState />

        <TvtListStudent />



    </div>
  )
}