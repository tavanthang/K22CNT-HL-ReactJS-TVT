import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function TvtProduct() {
    const products=[
        {id:1, name:"Iphone 18"},
        {id:2, name:"Samsung Galaxy S26 Ultra"},
        {id:3, name:"Xiaomi 15 Ultra"},
    ]
  return (
     <div>
      <h2>Danh sách sản phẩm</h2>
      <hr/>
      <ul>
        {
            products.map((p)=>(
                <li>
                    <Link to={`/products/${p.id}`}>{p.name}</Link>
                </li>
            ))
        }
        <hr/>
        <Outlet/>
      </ul>
    </div>
  )
}
