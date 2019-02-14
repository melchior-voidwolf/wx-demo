import React, { Component } from 'react'

export default class UserBackgroundWall extends Component {
    state = {
        wallBackGround: null,
    }
    handleFile = e => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend =  () => {
            const dataURL = reader.result
            this.setState({
                wallBackGround: dataURL
            })
        }
    }
    render() {
        const { wallBackGround } = this.state
        return <div className="user-background-wall">
        <div className="user-background-wall">
          <div className="wall-background-pic"
            style={ wallBackGround ? {background: `url(${wallBackGround}) no-repeat center center / cover`}: {}}
          >
            <input className='hidden-file-input' onChange={this.handleFile} type="file" capture="camera" accept="image/png,image/gif,image/jpeg" />
            { wallBackGround ? null : <div className="change-button">轻触设置相册封面</div> }
          </div>
          <div className="user-name">{window.localUser.name}</div>
          <div className="user-avator" style={{background: `url(${window.localUser.avator}) no-repeat center center / cover`}} ></div>
        </div>
      </div>
    }
}