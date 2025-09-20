import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import TvtNavBar from './components/TvtNavBar'
import TvtHome from './pages/TvtHome'
import TvtAbout from './pages/TvtAbout'
import TvtContact from './pages/TvtContact'
import TvtProduct from './pages/TvtProduct'
import TvtProductDetail from './pages/TvtProductDetail'
import TvtNotFound from './pages/TvtNotFound'

export default function TvtApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Ta Van Thang]</h1>
        <hr/>
        <BrowserRouter>
           
           <TvtNavBar/>
           <Routes>
            <Route path='/' element={<TvtHome />}/>
            <Route path='/about' element={<TvtAbout />}/>
            <Route path='/contact' element={<TvtContact />}/>
{/* 
            Nested route */}
            <Route path='/products' element={<TvtProduct />}>
               <Route path=":id" element={<TvtProductDetail />}/>
            </Route>

           {/* 404 page */}
            <Route path='*' element={<TvtNotFound/>}>
            </Route>
           
           </Routes>
        </BrowserRouter>
    </div>
  )
}