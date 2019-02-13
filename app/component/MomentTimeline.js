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
    renderCommentText = () => {
      const { momentText } = this.props
      const { displayAll, textOverMode, textOverCheck } = this.state
      return <div className="text-content-wrapper">
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
    }
    renderTextControlButton = () => {
      const { displayAll, textOverMode } = this.state
      return textOverMode &&
      <div
        className="content-control-button"
        onClick={this.reveseContentDisplayStatus}
      >
        {displayAll ? '收起' : '展开'}
      </div>
    }
    renderPics = () => {
      const { picList = [] } = this.props
      const SquarePic = props => <div
        key={props.id}
        style={{
          background: `url(${props.uri}) no-repeat center center / cover`
        }}
        className='square-pic'
      ></div>
      const DummyPic = () => <div className='square-pic dummy-pic'></div>
      if (picList.length === 0) { return null }
      if (picList.length === 1) {
        return <div className="moment-pic-wrapper">
          <img src={picList[0].uri} alt={picList[0].name} className="single-pic"/>
        </div>
      }
      if (picList.length === 2 || picList.length === 3) {
        return <div className="moment-pic-wrapper">
          <div className="one-line-pic">
            { picList.map(SquarePic)}
            {
              picList.length===2 && <DummyPic />
            }
          </div>
        </div>
      }
      if (picList.length === 4) {
        return <div className="moment-pic-wrapper">
          <div className="one-line-pic multi-line-margin">
            { picList.slice(0, 2).map(SquarePic)}
            <DummyPic />
          </div>
          <div className="one-line-pic">
            { picList.slice(2).map(SquarePic)}
            <DummyPic />
          </div>
        </div>
      }
      if (picList.length === 5 || picList.length === 6) {
        return <div className="moment-pic-wrapper">
          <div className="one-line-pic multi-line-margin">
            { picList.slice(0, 3).map(SquarePic)}
          </div>
          <div className="one-line-pic">
            { picList.slice(3).map(SquarePic)}
            { picList.length === 5 && <DummyPic /> }
          </div>
        </div>
      }
      if (picList.length === 7 || picList.length === 8 || picList.length === 9 ) {
        return <div className="moment-pic-wrapper">
          <div className="one-line-pic multi-line-margin">
            { picList.slice(0, 3).map(SquarePic)}
          </div>
          <div className="one-line-pic multi-line-margin">
            { picList.slice(3, 6).map(SquarePic)}
            { picList.length === 5 && <DummyPic /> }
          </div>
          <div className="one-line-pic">
            { picList.slice(6).map(SquarePic)}
            {
              ['1'.repeat(9-picList.length)].map((_, i) => <DummyPic key={9+i} />)
            }
          </div>
        </div>
      }
    }
    renderWebLink = () => {
      const { weblink } = this.props
      return (!!weblink) && <Weblink {...weblink} />
    }
    renderActionLine = () => {
      return <div className="user-action-line">
        <div className="post-info">
          3小时前
          <span className="other-info">知乎APP</span>
        </div>
        <div className="enable-action-line-button">• •</div>
      </div>
    }
    render() {
      return <div className="moment-timeline">
        <div className="moment-timeline-block">
          <div className="user-avator"></div>
          <div className="moment-main">
            <div className="user-name">我终于</div>
            { this.renderCommentText() }
            { this.renderTextControlButton() }
            { this.renderPics() }
            { this.renderWebLink() }
            { this.renderActionLine() }
          </div>
        </div>
      </div>
    }
}
