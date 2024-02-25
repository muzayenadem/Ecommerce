import React, { useState } from 'react'
import HomeSidebar from './HomeSidebar'
import Categories from './Categories'
import TopNav from '../topNav/TopNav'
import ProductsOutPage from './ProductsOutPage'
import { Outlet } from 'react-router-dom'
import HomeMain from './HomeMain'
function AllHomeComponents() {
  return (
    <>
    <TopNav str={'yyyyy'}/>
    <Outlet/>
    </>
  )
}

export default AllHomeComponents