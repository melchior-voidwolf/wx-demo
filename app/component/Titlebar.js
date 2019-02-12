import React, { Component } from 'react'

export default class Titlebar extends Component {
  render() {
    const {style = {}} = this.props
    return <div className='wx-titlebar-container' style={style}>
      <div className="wx-titlebar">
        <div className="title-text">朋友圈</div>
      </div>
    </div>
  }
}

