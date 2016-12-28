import React, { Component } from 'react'
import { render } from 'react-dom'
import s from './styles.sass'
import classnames from 'classnames'

class App extends Component {
  render(){
    return(
      <div class="root">
        <div>Template e-com</div>
        <div>Under construction</div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));