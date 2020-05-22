import Slider from "react-slick";
import React from "react";
import styles from './index.less'
import TextTransform from '@/components/textTransform'
import Link from 'next/link'
import {connect} from "react-redux";

@connect(({floatWindowVisible})=>({visible:floatWindowVisible}))
export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state.banners = [
      {
        src: '/static/images/banner1.png',
        color: '#E94846'
      },
      {
        src: '/static/images/banner1.png',
        color: '#E94846'
      }
    ]
  }


  state = {
    carouselBgColor: '#fbf0de'
  }

  showModal = () => {
    const { dispatch } = this.props
    dispatch({type:'FLOAT_WINDOW_SHOW'})
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

    const {banners} = this.state
    return (
      <div className="carousel">
        <div className="w banner-wrap clearfix">
          <h1>国内专业的智慧通讯服务提供商</h1>
          <span className="we-can">我们可以帮助您</span>
          <TextTransform texts={['提升转化效果','增加品牌曝光']}/>

          <div className="buttons clearfix">
            {/* <a href="" className="watch-video">观看视频</a> */}
            <a onClick={this.showModal} className="more">了解更多</a>
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
        <style lang="less" jsx>{styles}</style>
      </div>
    )


  }
}
