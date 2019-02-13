import React, { Component } from 'react'
import WxImageViewer from 'react-wx-images-viewer'
import moment from 'moment'

import Weblink from '@component/Weblink'

moment.locale('zh-cn')

const renderTextWithLines = str =>
  str.split('\n')
    .map(
      (_, i) => <p className='moment-text-line' key={i}>{_}</p>
    )

export default class MomentTimeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textOverMode: false,
      displayAll: false,
      textOverCheck: false,
      isOpen: false,
      index: 0,
      actionBar: false,
      likeList: props.likeList,
      friendComments: props.friendComments,
      tempReply: '',
      replyMode: false,
      replyTarget: {},
    }
  }
    reveseActionBarStatus = () => {
      this.setState({actionBar: !this.state.actionBar})
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
      const picList = (this.props.picList || []).map((_, i) => ({
        ..._,
        picIndex: i
      }))
      const SquarePic = props => <div
        key={props.id}
        onClick={this.openViewer(props.picIndex)}
        style={{
          background: `url(${props.uri}) no-repeat center center / cover`
        }}
        className='square-pic'
      ></div>
      const DummyPic = () => <div className='square-pic dummy-pic'></div>
      if (picList.length === 0) { return null }
      if (picList.length === 1) {
        return <div className="moment-pic-wrapper">
          <img onClick={this.openViewer(0)} src={picList[0].uri} alt={picList[0].name} className="single-pic"/>
        </div>
      }
      if (picList.length === 2 || picList.length === 3) {
        return <div className="moment-pic-wrapper">
          <div className="one-line-pic">
            { picList.map(SquarePic)}
            {
              picList.length === 2 && <DummyPic />
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
    renderImgViewer = () => {
      const { picList = [] } = this.props
      const { isOpen, index } = this.state
      if (picList.length === 0) { return null }
      if (!isOpen) {return null}
      return <WxImageViewer onClose={this.onClose} urls={picList.map(_ => _.uri)} index={index}/>
    }
    onClose = () => {
      this.setState({
        isOpen: false,
        index: 0
      })
    }
    openViewer = index => () => {
      this.setState({
        index,
        isOpen: true
      })
    }
    renderWebLink = () => {
      const { weblink } = this.props
      return (!!weblink) && <Weblink {...weblink} />
    }
    likeit = () => {
      this.setState ({
        actionBar: false,
        likeList: this.state.likeList.concat('子空')
      })
    }
    sendComment = () => {
      this.setState ({
        actionBar: false,
        replyMode: true,
        replyTarget: {},
      })
    }
    renderActionLine = () => {
      const { actionBar } = this.state
      const { created, from } = this.props
      return <div className="user-action-line">
        <div className="post-info">
          {moment(created).fromNow()}
          {from ? <span className="other-info">{from}</span> : null }
        </div>
        <div
          onClick={this.reveseActionBarStatus}
          className="enable-action-line-button">
          • •
        </div>
        <div className="action-button-bar-wrapper" style={actionBar ? {} : {width: 0}}>
          <div className="action-button-bar">
            <div className="action-button" onClick={this.likeit}><i className='iconfont icon-heart' /> 赞</div>
            <div className="action-button" onClick={this.sendComment}><i className='iconfont icon-comment' /> 评论</div>
          </div>
        </div>
        { actionBar && <div onTouchMove={this.reveseActionBarStatus} onClick={this.reveseActionBarStatus} className="mask"></div> }
      </div>
    }
    renderFriendComment = () => {
      const { likeList, friendComments } = this.state
      if (likeList.length === 0 && friendComments.length === 0) { return null }
      return <div className='friend-comment'>
        {
          likeList.length > 0 && <div className="like-list">
            <i className='iconfont icon-heart' />
            <span className="name-list">
              {likeList.map((_, i) => <span className='user-name' key={i}>{_.name}</span>)}
            </span>
          </div>
        }
        {
          friendComments.length > 0 && <div className='friend-comments'>
            {
              friendComments.map((_, i) => {
                console.log(_)
                return <div className='friend-comment-item' key={i} onClick={this.replayFriendComment(_)}>
                  {_.user.name}
                  {
                    _.to ?
                      <span>
                        <span className='normal-text'>回复</span>
                        {_.to.name}
                        <span className='normal-text'>:</span>
                      </span> :
                      <span className='normal-text'>:</span>
                  }
                  <span className='normal-text'>{_.comment}</span>
                </div>
              })
            }
          </div>
        }
      </div>
    }
    renderReplyInput = () => {
      const { replyMode, tempReply, replyTarget } = this.state
      return replyMode && <div className="reply-input">
        <div className="mask" onTouchMove={this.cancelInput}  onClick={this.cancelInput}></div>
        <div className="reply-input-wrapper">
          <input
            autoFocus="autofocus"
            onKeyUp={ e =>
              e.keyCode === 13 && this.postReply()
            }
            placeholder={replyTarget.comment ? `回复${replyTarget.comment.user.name}` : '评论'}
            type="text" className="replay-input" onChange={this._handleInput} value={tempReply} />
          <div className="cancel-input" onClick={this.cancelInput}>取消</div>
        </div>
      </div>
    }
    replayFriendComment = (comment) => () => {
      this.setState({
        replyTarget: {comment},
        tempReply: '',
        replyMode: true,
      })
    }
    _handleInput = (e) => {
      const { tempReply } = this.state
      this.setState({
        tempReply: e.target.value
      })
    }
    cancelInput = () => {
      this.setState({
        replyTarget: {},
        tempReply: '',
        replyMode: false,
      })
    }
    postReply = () => {
      const { replyTarget, tempReply } = this.state
      const {friendComments} = this.props
      if (tempReply.length <= 0) { return null }
      friendComments.push(
        replyTarget.comment ? {
          user: window.localUser,
          to: replyTarget.comment.user,
          comment: tempReply
        } : {
          user: window.localUser,
          comment: tempReply
        }
      )
      this.setState({
        replyTarget: {},
        tempReply: '',
        replyMode: false,
        friendComments,
      })
    }
    render() {
      const { user } = this.props
      return <div className="moment-timeline" ref='moment'>
        <div className="moment-timeline-block">
          <div className="user-avator" style={{background: `url(${user.avator}) no-repeat center center / cover`}} ></div>
          <div className="moment-main">
            <div className="user-name">{user.name}</div>
            { this.renderCommentText() }
            { this.renderTextControlButton() }
            { this.renderPics() }
            { this.renderImgViewer() }
            { this.renderWebLink() }
            { this.renderActionLine() }
            { this.renderFriendComment() }
            { this.renderReplyInput() }
          </div>
        </div>
      </div>
    }
}
