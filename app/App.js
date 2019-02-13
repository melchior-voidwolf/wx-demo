import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from '@page/HomePage'
import Webview from '@page/Webview'

import '@style/index.styl'

window.localUser = {
  name: '子空',
  id: 'void-me',
  avator: '/img/1.jpg'
}

render(
  <Router>
    <div className='full-size'>
      <Route exact path="/" component={HomePage} />
      <Route path="/webview" component={Webview} />
    </div>
  </Router>,
  document.getElementById('root')
)
