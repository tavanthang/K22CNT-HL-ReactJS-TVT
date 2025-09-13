import React, { Component } from 'react';

class TvtEventCompClass extends Component {

    tvt_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    tvt_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.tvt_Func1}>Click</button>
                <button onClick={()=>this.tvt_Func2("Tạ Văn THẮng")}>Click Param</button>
            </div>
        );
    }
}

export default TvtEventCompClass;