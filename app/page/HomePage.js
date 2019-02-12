import React, { Component } from 'react'

import MomentTimeline from '@component/MomentTimeline'

import '@style/page/home-page.styl'

class HomePage extends Component {
  render() {
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
    </div>
  }
}

export default HomePage