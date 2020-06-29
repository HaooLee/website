import Slider from "react-slick";
import React from "react";
import styles from './index.less'
import TextTransform from '@/components/textTransform'
import Link from 'next/link'
import {connect} from "react-redux";
import ShowVideo from '@/components/showVideo'
import Router from 'next/router'



@connect(({floatWindowVisible})=>({visible:floatWindowVisible}))
export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state.banners = [
      {
        src: 'https://img.teddymobile.cn/www/images/banner1.png',
        color: '#E94846'
      },
      {
        src: 'https://img.teddymobile.cn/www/images/banner1.png',
        color: '#E94846'
      }
    ]
  }


  state = {
    carouselBgColor: '#fbf0de',
    videoVisible:false,
    videoList:['https://img.teddymobile.cn/www/video/zndx.mp4','','https://img.teddymobile.cn/www/video/kyy.mp4','']
  }

  showModal = () => {
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
  }

  cancel = () => {
    this.setState({
      videoVisibleIndex:-1,
    })
  }

  handleShowVideo = (index)=> {
    if(index == 1){
      Router.push({
        pathname:'/scenicProduct'
      })
    }else if(index == 3){
      Router.push({
        pathname:'/numberProduct'
      })
    }else {
      this.setState({
        videoVisibleIndex:index,
      })
    }
  }

  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   autoplay: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   // pauseOnFocus: true,
    //   dotsClass: 'slick-dots td-dot',
    //   // beforeChange: (oi, ni) => {
    //   //   this.setState({
    //   //     carouselBgColor: banners[ni].color
    //   //   })
    //   // }
    // }

    const {videoVisibleIndex,videoList} = this.state
    return (
      <>
      <div className="carousel">
        <div className="w banner-wrap clearfix">
          <h1>国内专业的智慧通讯服务提供商</h1>
          <span className="we-can">我们可以帮助您</span>
          <TextTransform texts={['提升转化效果','增加品牌曝光']}/>

          <div className="buttons clearfix">
            {/* <a href="" className="watch-video">观看视频</a> */}
            {/*<a onClick={this.showModal} className="more">了解更多</a>*/}
            <img src="/static/images/index/head-bg-3.png" alt=""/>

          </div>

          {/*<Slider {...settings}>*/}
            {/*{*/}
              {/*banners.map(i => {*/}
                {/*return (*/}
                  {/*<div className="banner-item" key={i}>*/}
                    {/*< img src={i.src} alt=""/>*/}
                  {/*</div>*/}
                {/*)*/}
              {/*})*/}
            {/*}*/}
          {/*</Slider>*/}
        </div>
      </div>
          <div className={'service-center'}>
            <div className={'w'}>
              <h2>服务中心</h2>
              <p className={'en-title'}>SERVICE CENTER</p>
              <div className={'content'}>
                <div className={'item'} >
                  <div className={'play'} onClick={e => this.handleShowVideo(0)}>
                    <img src="/static/images/index/11.png" alt=""/>
                    <div className={'mask'}></div>
                  </div>
                  <Link href={'/intelligenceSms'}>
                    <div className={'text-wrap'}>
                      <p className={'title'}>智能短信</p>
                      <p className={'desc'}>传统文本短信升级</p>
                      <p className={'desc'}>企业认证增加用户信任度</p>
                      <p className={'desc'}>短信内容卡片化，美观方便阅读</p>
                      <p className={'desc'}>短信菜单、场景按钮，直达业务页</p>
                      <p className={'desc'}>快速提供企业服务</p>
                    </div>
                  </Link>
                </div>
                <div className={'item'}>
                  <div className={'play'}  onClick={e => this.handleShowVideo(1)}>
                    <img src="/static/images/index/22.png" alt=""/>
                    <div className={'mask'}></div>
                  </div>
                  <Link href={'/scenicProduct'}>
                    <div className={'text-wrap'}>
                      <p className={'title'}>5G场景消息</p>
                      <p className={'desc'}>千人千面的智慧场景消息服务</p>
                      <p className={'desc'}>支持下发多种富媒体消息</p>
                      <p className={'desc'}>提供Chatbot能力与用户快速互动</p>
                    </div>
                  </Link>
                </div>
                <div className={'item'}>
                  <div className={'play'}  onClick={e => this.handleShowVideo(2)}>
                    <img src="/static/images/index/33.png" alt=""/>
                    <div className={'mask'}></div>
                  </div>
                  <Link href={'/quickAppProduct'}>
                    <div className={'text-wrap'}>
                      <p className={'title'}>快应用</p>
                      <p className={'desc'}>无需下载安装，即点即用</p>
                      <p className={'desc'}>享受原生应用的性能体验</p>
                    </div>
                  </Link>
                </div>
                <div className={'item'}>
                  <div className={'play'}  onClick={e => this.handleShowVideo(3)}>
                    <img src="/static/images/index/44.png" alt=""/>
                    <div className={'mask'}></div>
                  </div>
                  <Link href={'/numberProduct'}>
                    <div className={'text-wrap'}>
                      <p className={'title'}>号码认证</p>
                      <p className={'desc'}>企业号码有效认证</p>
                      <p className={'desc'}>提高品牌曝光</p>
                      <p className={'desc'}>准确识别陌生电话</p>
                      <p className={'desc'}>来电接的安心，去电不被拒绝</p>
                    </div>
                  </Link>
                </div>
              </div>
              <a onClick={this.showModal} className="more">马上合作</a>
            </div>
            {
              videoList.map((item, index) =>{
                return <ShowVideo key={index} visible={videoVisibleIndex === index && item} onCancel={this.cancel} videoSrc={item} />
              })
            }
        </div>
        <style lang="less" jsx>{styles}</style>
      </>
    )


  }
}
