import React from 'react'
import styles from './index.less'
import {connect} from 'react-redux'
import ShowVideo from '@/components/showVideo'

@connect(({floatWindowVisible})=>({visible:floatWindowVisible}))
export default class ProductBanner extends React.Component {

  showModal = () => {
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
  }
  state={
    videoVisible:false
  }

  cancel = () => {
    this.setState({
      videoVisible:false
    })
  }

  handleShowVideo = ()=> {
    this.setState({
      videoVisible:true
    })
  }

  render() {
    const {videoVisible} = this.state
    const {src, title, desc, customClassName,videoSrc} = this.props
    return (
      <>
        <section className={`banner ${customClassName}`}>
          <div className="banner-content w">
            <div className="banner__desc">
              <h1 className="banner__desc__title">{title}</h1>
              <p className="banner__desc__content">{desc}</p>
              <div className="buttons clearfix">
                {
                  videoSrc &&  <a className="watch-video" onClick={this.handleShowVideo}>观看视频</a>
                }

                <a onClick={this.showModal} className="more">马上合作</a>
              </div>
            </div>

            <img className="banner__img" src={src} />
          </div>
          {
            videoSrc &&  <ShowVideo visible={videoVisible} onCancel={this.cancel} videoSrc={videoSrc}></ShowVideo>
          }

        </section>
        <style jsx>{styles}</style>
      </>
    )
  }
}
