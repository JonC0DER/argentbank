import React, { Component } from 'react'
import Footer from './Footer'
import RouterLogic from './RouterLogic'

export class App extends Component {

  render() {
    return (
        <>
            <RouterLogic/>
            <Footer/>
        </>
    )
  }
}

export default App