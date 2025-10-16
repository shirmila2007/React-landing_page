import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Destination from './destination'
import { Outlet } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Layout from './layout'
import Home from './home'





export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Route>
    </Routes>
    </div>
  )
}
