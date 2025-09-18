import React, { useEffect, useState } from 'react'

export default function TvtUseEffectDemo() {
    // useEffect - khong co tham so
   useEffect(()=>{
        console.log("useEffect(()=>{...}): Gọi callback mỗi khi re-render");
    })

    // []
    useEffect(()=>{
        console.log("useEffect(()=>{...},[]): Gọi callback một lần duy nhất");
    },[])

    // [count]

    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("useEffect(()=>{...},["+ count +"]): Gọi callback mỗi khi count thay đổi:",count);
    },[count])
  return (
    <div className='alert alert-success'>
        <h2>useEffect_ Demo Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
