import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from '@page/HomePage'
import MomentDetailPage from '@page/MomentDetailPage'
import Webview from '@page/Webview'

import '@style/index.styl'

render(
  <Router>
    <div className='full-size'>
      <Route exact path="/" component={HomePage} />
      <Route path="/sample" component={MomentDetailPage} />
      <Route path="/webview" component={Webview} />
    </div>
  </Router>,
  document.getElementById('root')
)
