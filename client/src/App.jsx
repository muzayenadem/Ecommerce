import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import store from './feutures/store/store'
import TopNav from './components/topNav/TopNav'
import Rout from './router/Rout'


axios.defaults.withCredentials = true
function App() {


  return (
    <>
 
      <TopNav/>
      <Rout/>
    </>
  )
}

export default App
