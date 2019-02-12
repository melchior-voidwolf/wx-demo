import React, { Component } from 'react'

export default class Titlebar extends Component {
  render() {
    const {title = '朋友圈', style = {}, onBack = false} = this.props
    return <div className='wx-titlebar-container' style={style}>
      <div className="wx-titlebar">
        <div
          onClick={onBack || (() => {})}
          className="left-button">{onBack ? <i className='iconfont icon-left' /> : ''}</div>
        <div className="title-text">{title}</div>
        <div className="right-button"></div>
      </div>
    </div>
  }
}

