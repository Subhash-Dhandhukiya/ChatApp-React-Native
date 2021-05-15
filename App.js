import React, { Fragment, useState } from 'react'
import NavContainer from './src/Navigation'
import Loader from './src/Component/Loader'
import { StatusBar } from 'react-native'
import { StoreProvider } from './src/Context/store'
import { ThemeContext } from './src/ThemeContext'
const App = () => {

  const [theme,setTheme]=useState("Light")

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <StoreProvider>
        <StatusBar barStyle="light-content" />
        <NavContainer />
        <Loader />
      </StoreProvider>
    </ThemeContext.Provider>

  )
}

export default App;
