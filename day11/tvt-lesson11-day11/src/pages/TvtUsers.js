import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function TvtUsers() {

    //api
    const tvt_api = "https://68d35318214be68f8c65769e.mockapi.io/k22cnt_TaVanThang_2210900063/users";

     const [users, setUsers] =useState();
     const [loading, setLoading] = useState(true);

     //useEffect
     useEffect(() => {
    axios
      .get(tvt_api)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      })
      .finally(() =>{
        setLoading(false);
      });
  }, []);;

  if(loading) return <p>Dang Tai Du Lieu.....</p>

  // render data
  let usersElement = users.map((item,index)=>{
    return(
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.fullname}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.status}</td>
            <td>
                <Link to={`/users/edit/${item.id}`} className="btn btn-success">
                        Edit
                </Link>
            </td>
        </tr>
    )
  })

  return (
    <div>
        <h2>Danh Sach Users</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th> id </th>
                    <th> Fullname </th>
                    <th> Password </th>
                    <th> Status </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                {usersElement}
            </tbody>
        </table>
        <a href='/users/add' className='btn btn-primary'>Them moi</a>
        
    </div>
  )
}
