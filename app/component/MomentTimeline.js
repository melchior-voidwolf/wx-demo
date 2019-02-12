import React, { Component } from 'react'

import Weblink from '@component/Weblink'

const renderTextWithLines = str =>
  str.split('\n')
    .map(
      (_, i) => <p className='moment-text-line' key={i}>{_}</p>
    )


export default class MomentTimeline extends Component {
    state = {
      textOverMode: false,
      displayAll: false,
      textOverCheck: false
    }
    reveseContentDisplayStatus = () => {
      this.setState({
        displayAll: !this.state.displayAll
      })
    }
    checkHeight = e => {
      if (this.state.textOverCheck) { return null }
      setTimeout(() => {
        const {clientHeight} = e
        if (clientHeight > 3 * 20) {
          this.setState({
            textOverMode: true,
            textOverCheck: true,
          })
        } else {
          this.setState({
            textOverCheck: true,
          })
        }
      }, 0)
    }
    render() {
      const { momentText } = this.props
      const { displayAll, textOverMode, textOverCheck } = this.state
      return <div className="moment-timeline">
        <div className="moment-timeline-block">
          <div className="user-avator"></div>
          <div className="moment-main">
            <div className="user-name">我终于</div>
            <div className="text-content-wrapper">
              <div
                ref={this.checkHeight}
                style={{
                  opacity: textOverCheck ? 1 : 0,
                }}
                className={
                  textOverMode ?
                    (displayAll ? 'user-text-content' : 'user-text-content user-text-content-hide') :
                    'user-text-content'
                }
              >
                {
                  displayAll ?
                    renderTextWithLines(momentText) :
                    momentText
                }
              </div>
            </div>
            {
              textOverMode &&
              <div
                className="content-control-button"
                onClick={this.reveseContentDisplayStatus}
              >
                {displayAll ? '收起' : '展开'}
              </div>
            }
            <Weblink
              uri='http://www.zuimoban.com/jiaocheng/htmlcss/11742.html'
              intro='小米发布新手机啦～～～'
            />
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
