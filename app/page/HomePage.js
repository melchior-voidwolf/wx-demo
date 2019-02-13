import React, { Component } from 'react'

import MomentTimeline from '@component/MomentTimeline'
import Titlebar from '@component/Titlebar'
import BodyScrollStausManager from '@util/BodyScrollStausManager'

import getMoment from '@/asyncData/getMoments'

const getTitleBarOpacity = distance => {
  if (distance > 275) { return 1 }
  if (distance < 205) { return 0 }
  return (distance - 205)/70
}

@BodyScrollStausManager()
class HomePage extends Component {
  state = {
    data: []
  }
  componentDidMount(){
    this.fetchData()
    this.props.topic.addListener({
      next: async e => {
        const { action } = e
        if (action === 'LOAD_MORE') {
          this.fetchData()
        }
      }
    })
  }
  refresh = () => {
    this.setState({
      data: []
    }, () => {
      this.props.scrollToTopWithSpeed()
      this.fetchData()
    })
  }
  fetchData = async () => {
    if (this.lock) { return null }
    const { offset } = this.state
    const data = await getMoment()
    if (data.length === 0) {this.lock = true}
    this.setState({
      data: this.state.data.concat(data),
      offset: offset+length
    }, this.props.unLock)
  }
  render() {
    const { scrollTop } = this.props
    const { data } = this.state
    return <div className='home-page'>
      <div className="user-background-wall">
        <div className="user-background-wall">
          <div className="wall-background-pic">
            <div className="change-button">轻触设置相册封面</div>
          </div>
          <div className="user-name">{window.localUser.name}</div>
          <div className="user-avator" style={{background: `url(${window.localUser.avator}) no-repeat center center / cover`}} ></div>
        </div>
      </div>
      {
        data.map(_ => <MomentTimeline key={_.id} {..._}/>)
      }
      <Titlebar
        onDoubleClick={this.refresh}
        style={{opacity: getTitleBarOpacity(scrollTop)}}
      />
    </div>
  }
}

export default HomePage