import React, { Component } from 'react';
import TvtEventComp from './components/TvtEventComp';
import TvtEventCompClass from './components/TvtEventCompClass';
import TvtEventForm1 from './components/TvtEventForm1';
import TvtEventForm2 from './components/TvtEventForm2';

class TvtApp extends Component {
  render() {
    return (
      <div className='container border'>
          <h1 className='text-center'> Tạ Văn Thắng <br/>ReactJs - Form - Event</h1>
          <hr/>
        

        <TvtEventComp/>

        <TvtEventCompClass/>

        <TvtEventForm1 />

        <TvtEventForm2 />
        
      </div>
    );
  }
}

export default TvtApp;
