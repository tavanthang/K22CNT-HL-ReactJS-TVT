import React from 'react'

export default function TvtEventComp() {

    const tvt_Func1 = ()=>{
        alert("Xin chào")
    }
    const tvt_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={tvt_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={Tvt_Func1()}>Click Here</button>ss */}
            {/* gọi hàm có tham số */}

            <button onClick={()=>tvt_Func2('Tạ Văn Thắng')}>Click Here Param</button>

        </div>
    )
}