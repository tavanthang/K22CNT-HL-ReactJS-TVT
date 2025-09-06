import React, { Component } from 'react';
import TvtFuncComp from './components/TvtFuncComp';
import TvtClassComp from './components/TvtClassComp';
import TvtRenderList from './components/TvtRenderList';
import TvtListStudent from './components/TvtListStudent';

class TvtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
            students: [
                { id: 1, name: "Hoắc Han A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Cửu Thiên B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Hoàng Long C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thiên D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Thiên Hoàng E", age: 23, gender: "Nam", isActive: false }
            ],
        }
  }
  render() {
    return (
      <div className='container border'>
        <h1>TẠ Văn Thắng</h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr/>
        <TvtFuncComp />
        <hr/>
        <TvtFuncComp fullName="Ta Van Thang" address="NTU" email="vanthang@gmail.com"></TvtFuncComp>

        <TvtClassComp />
        <TvtClassComp name="Van Thang" age="21" phone = "0326378604" email="vanthang@gmaill.com"></TvtClassComp>

        <hr/>
        <TvtRenderList />
        <hr/>
        <TvtListStudent students = {this.state.students} />
      </div>
    );
  }
}

export default TvtApp;