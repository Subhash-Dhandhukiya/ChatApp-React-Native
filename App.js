import React, { Fragment } from 'react'
import NavContainer from './src/Navigation'
import Loader from './src/Component/Loader'
import {StatusBar} from 'react-native'
import { StoreProvider } from './src/Context/store'

const App = () => {
  return (
    <StoreProvider>
      <StatusBar barStyle="light-content"/>
      <NavContainer/>
      <Loader/>
    </StoreProvider>
  )
}

export default App;
