import React from 'react'
import Navigation from './layout/Navigation/Navigation'
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {

  return (
    <div className='App'>
      <Navigation />
      <Routes />
    </div>
  )
}

export default App
