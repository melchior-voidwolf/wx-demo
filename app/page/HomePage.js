import React, { Component } from 'react'

import MomentTimeline from '@component/MomentTimeline'
import Titlebar from '@component/Titlebar'

const momentText =
`世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也
苟利国家生死以
在使用React时需要给页面绑定一个键盘按下的事件，绑定后按下键盘并没有反应
`

const wlDemo = {
  uri: 'http://www.zuimoban.com/jiaocheng/htmlcss/11742.html',
  intro: '小米发布新手机啦～～～'
}

const picList = [
  { name: 'vl.jpg', uri: '/img/vl.jpg' }
]

const picList2 = [
  { name: 'vw.jpg', uri: '/img/vw.jpg' }
]

const picList3 = [
  { name: 'vl.jpg', uri: '/img/vl.jpg', id: 1, },
  { name: 'vw.jpg', uri: '/img/vw.jpg', id: 2, },
]

const picList4 = [
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 1 },
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 2 },
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 3 },
  { name: 'co.jpg', uri: '/img/demo.jpg', id: 4 },
]

const picList5 = [
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 1 },
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 2 },
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 3 },
  { name: 'co.jpg', uri: '/img/demo.jpg', id: 4 },
  { name: 'co.jpg', uri: '/img/demo.jpg', id: 5 },
  // { name: 'co.jpg', uri: '/img/demo.jpg', id: 6 },
]

const picList6 = [
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 1 },
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 2 },
  { name: 'co.jpg', uri: 'https://idiotwu.me/content/images/2015/03/caniuse.png', id: 3 },
  { name: 'co.jpg', uri: '/img/demo.jpg', id: 4 },
  { name: 'co.jpg', uri: '/img/demo.jpg', id: 5 },
  { name: 'co.jpg', uri: '/img/demo.jpg', id: 6 },
  { name: 'vw.jpg', uri: '/img/vw.jpg', id: 7 },
]

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
  componentWillUnmount() {
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
      <MomentTimeline momentText={momentText} picList={picList} />
      <MomentTimeline momentText={momentText} picList={picList6}/>
      <MomentTimeline momentText={momentText} picList={picList2} weblink={wlDemo} />
      <MomentTimeline momentText={'我爱写代码我爱写代码'} picList={picList3} />
      <MomentTimeline momentText={momentText} picList={picList4}/>
      <MomentTimeline momentText={momentText} picList={picList5}/>
      <Titlebar style={{opacity: titleOpacity}} />
    </div>
  }
}

export default HomePage