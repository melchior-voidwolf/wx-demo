import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from '@page/HomePage'
import MomentDetailPage from '@page/MomentDetailPage'

render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/sample" component={MomentDetailPage} />
    </div>
  </Router>,
  document.getElementById('root')
)
