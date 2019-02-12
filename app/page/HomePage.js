import React, { Component } from 'react'
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

class MomentTimeline extends Component {
  state = {
    displayAll: true
  }
  reveseContentDisplayStatus = () => {
    this.setState({
      displayAll: !this.state.displayAll
    })
  }
  render() {
    const { displayAll } = this.state
    return <div className="moment-timeline">
    <div className="moment-timeline-block">
      <div className="user-avator"></div>
      <div className="moment-main">
        <div className="user-name">我终于</div>
        <div className="text-content-wrapper">
        <div className={"user-text-content" + (displayAll ? '' : ' user-text-content-hide')}>
          稳扎稳打被憋我憋不出稳扎稳打被
          憋我憋不出稳扎稳打被憋我憋不出稳扎稳
          打被憋我憋不出稳扎稳打被憋我憋不出稳扎
          稳打被憋我憋不出稳扎稳打被憋我憋不出稳扎
          稳打被憋我憋不出稳扎稳打被憋我憋不出
        </div>
        </div>
        <div className="content-control-button" onClick={this.reveseContentDisplayStatus}>{displayAll ? '收起' : '展开'}</div>
        <div className="user-action-line">
          <div className="post-info">
          3小时前
            <span className="other-info">知乎APP</span>
          </div>
          <div className="enable-action-line-button">• •</div>
        </div>
      </div>
    </div>
    </div>
  }
}

export default HomePage