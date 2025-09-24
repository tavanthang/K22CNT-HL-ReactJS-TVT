import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function TvtCategory() {
    const tvt_api ="http://apixm.devmaster.vn/api/Categories/"
    const [Category, setCategory] = useState([]);
    useEffect(()=>{
        axios
            .get(tvt_api)
            .then((response) => {
                setCategory(response.data); // Lưu dữ liệu vào state
            })
        .catch((error) => {
            console.error("Có lỗi khi gọi API:", error);
        })
    },[])
  return (
    <div>
      Danh sách loại sản phẩm
      <hr/>
      <ul>
        {
            Category.map((item,index)=>{
                return <li>{item.title}</li>
            })
        }
      </ul>
    </div>
  )
}