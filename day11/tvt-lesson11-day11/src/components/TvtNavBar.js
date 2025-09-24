import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TvtNavBar() {
  return (
    <nav style={{ padding:'1rem', background:'#eee'}}>
        <NavLink to={'/'} style={{padding:".5rem 1rem"}}>Home</NavLink>
        <NavLink to={'/about'} style={{padding:".5rem 1rem"}}>About</NavLink>
        <NavLink to={'/contact'} style={{padding:".5rem 1rem"}}>Contact</NavLink>
        <NavLink to={'/products'} style={{padding:".5rem 1rem"}}>Product</NavLink>
        <NavLink to={'/users'} style={{padding:".5rem 1rem"}}>Users</NavLink>
         <NavLink to='/category' style={{ padding: ".5rem 1rem"}}>Category</NavLink>
    </nav>
  )
}
