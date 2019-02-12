import React, { Component } from 'react'
import qs from 'qs'

import Titlebar from '@component/Titlebar'

export default class Webview extends Component {
  render() {
    const query = qs.parse(this.props.history.location.search.slice(1))
    return <div className='webview-page'>
      <Titlebar
        title={query.intro}
        onBack={this.props.history.goBack}
      />
      <iframe className='wx-webview' src={query.uri} frameBorder="0"></iframe>
    </div>
  }
}
