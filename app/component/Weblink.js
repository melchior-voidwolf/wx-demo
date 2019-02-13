import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weblink extends Component {
    static contextTypes = {
      router: PropTypes.object.isRequired
    }
    render() {
      const { uri, intro, icon } = this.props
      return <div className="webpage-link" onClick={() => this.context.router.history.push(`/webview?intro=${intro}&uri=${uri}`)}>
        <div className="webpage-icon" style={{background: `url(${icon}) no-repeat center center / cover`}} ></div>
        <div className="webpage-title">{intro}</div>
      </div>
    }
}