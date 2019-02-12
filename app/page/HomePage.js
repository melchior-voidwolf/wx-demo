import React, { Component } from 'react'

import MomentTimeline from '@component/MomentTimeline'
import Titlebar from '@component/Titlebar'

class HomePage extends Component {
  state = {
    titleOpacity: 0
  }
  titlebarStyleProcess = () => {
    const {titleOpacity} = this.state
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop < 205) {
      if (titleOpacity === 0) {
        return null
      } else {
        this.setState({titleOpacity: 0})
        return null
      }
    }
    if (scrollTop > 275) {
      if (titleOpacity === 1) {
        return null
      } else {
        this.setState({titleOpacity: 1})
        return null
      }
    }
    this.setState({titleOpacity: (scrollTop - 205)/60 })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.titlebarStyleProcess)
  }
  componentWillMount() {
    window.removeEventListener('scroll', this.titlebarStyleProcess)
  }
  render() {
    const {titleOpacity} = this.state
    return <div className='home-page'>
      <div className="user-background-wall">
        <div className="user-background-wall">
          <div className="wall-background-pic">
            <div className="change-button">轻触设置相册封面</div>
          </div>
          <div className="user-name">子空</div>
          <div className="user-avator"></div>
        </div>
      </div>
      <MomentTimeline />
      <MomentTimeline />
      <MomentTimeline />
      <MomentTimeline />
      {titleOpacity!== 0 && <Titlebar style={{opacity: titleOpacity}} />}
    </div>
  }
}

export default HomePage