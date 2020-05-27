import React from 'react'
import styles from './index.less'


export default class ShowVideo extends React.Component{
  constructor(props){
    super(props)
    this.state.visible = props.visible
    this.videoDom=React.createRef()
  }

  state={}
  touchmove = e =>{
    e.stopPropagation()
    e.preventDefault()
  }

  componentWillReceiveProps({visible}, nextContext) {
    if(this.state.visible !== visible){
      if(visible){
        this.videoDom.current.play()
      }else {
        this.videoDom.current.pause()
      }
      this.setState({
        visible
      })
    }
  }

  componentDidMount() {
    document.getElementById('video-mask').addEventListener('touchmove', this.touchmove, { passive: false })
    document.getElementById('video-mask').addEventListener('scroll', this.touchmove, { passive: false })
  }

  componentWillUnmount() {
    document.getElementById('video-mask').removeEventListener('touchmove', this.touchmove,)
    document.getElementById('video-mask').removeEventListener('scroll', this.touchmove,)
  }

  handleCloseClick = () =>{
   if( this.props.onCancel ){
    this.props.onCancel()
     return
   }

    this.setState({
      visible:false
    })
    this.videoDom.current.pause()
  }

  render(){
    const {title,children,videoSrc} = this.props
    const {visible} = this.state
    return (
      <>
        <div style={{display:visible?'block':'none'}} className="video-mask" id="video-mask" >
          <div className="video-wrap">

            <video controls="controls" ref={this.videoDom} className="td_video" id="td_video" poster={videoSrc} src={videoSrc} type="video/mp4"></video>
            <div className="close" onClick={this.handleCloseClick}>
              X
            </div>
          </div>

        </div>
        <style jsx>{styles}</style>
      </>
    )
  }

}
