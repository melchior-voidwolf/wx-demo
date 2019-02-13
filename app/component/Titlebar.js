import React, { Component } from 'react'

export default class Titlebar extends Component {
  lock = false
  prevMark = false
  doubleClickHandle = () => {
    console.log(1)
    const { onDoubleClick } = this.props
    if (!onDoubleClick) { return null }
    if (this.lock) { return null }
    if (!this.prevMark) {
      this.prevMark = true
      setTimeout(() => {
        this.prevMark = false
      }, 300)
    } else {
      onDoubleClick()
      this.lock = true
      setTimeout(() => {
        this.lock = false
        this.prevMark = false
      }, 1000)
    }
  }
  render() {
    const {title = '朋友圈', style = {}, onBack = () => {}} = this.props
    return <div className='wx-titlebar-container' style={style}>
      <div className="wx-titlebar">
        <div
          onClick={onBack}
          className="left-button">{onBack ? <i className='iconfont icon-left' /> : ''}</div>
        <div className="title-text" onClick={this.doubleClickHandle}>{title}</div>
        <div className="right-button"></div>
      </div>
    </div>
  }
}

