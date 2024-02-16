import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
// import store from './feutures/store/store'
import TopNav from './components/topNav/TopNav'
import Rout from './router/Rout'
/// components fpr practice
import Home from './practice/Home'
import LoginDrowbar from './components/drowbars/Drowbar'
import LoginD from './components/dialougs/LoginD'
axios.defaults.withCredentials = true

import store from './feutures/store/store'
function App() {


  return (
    <Provider store={store}>
          <div>
      {/* <TopNav/> */}
      <Rout/>
      {/* <Home/> */}
 
    </div>
    </Provider>
  )
}

export default App
