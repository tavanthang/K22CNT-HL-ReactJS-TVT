import React from 'react'
import TvtUseState from './components/TvtUseState'
import TvtListStudent from './components/TvtListStudent'
import TvtUseEffectDemo from './components/TvtUseEffectDemo'
import TvtFormStudent from './components/TvtFormStudent'
import TvtExamContext from './components/TvtExamContext'
import TvtExampleContext from './components/TvtExampleContext'

export default function TvtApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Ta Van Thang]</h1>
        <hr/>

        <TvtUseState />

        <TvtListStudent />

        <TvtUseEffectDemo/>

        <TvtExampleContext/>


    </div>
  )
}