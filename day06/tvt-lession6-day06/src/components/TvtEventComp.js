import React from 'react';

const TvtEventComp = () => {

    const tvt_Func1 = ()=>{
        alert("Xin Chaof")
    }
    const tvt_Func2 = (param)=>{
        alert(param)
    }

    return (
        <div>
            <h1>Event - Component Function</h1>
            <button onClick={tvt_Func1}>Click Here</button>
            
            <button onClick={()=>tvt_Func2('Tạ Văn Thắng')}>Click Here Param</button>
            
        </div>
    );
}

export default TvtEventComp;
