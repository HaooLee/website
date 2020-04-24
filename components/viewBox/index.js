import Slider from "react-slick";
import React from "react";
import styles from './index.less'
import TextTransform from '@/components/textTransform'
import Link from 'next/link'
export default class ViewBox extends React.Component {
  constructor(props) {
    super(props)
  }


  state = {

  }

  render() {
    return (
      <div className="product">

        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        <span className="line line-4"></span>

        <span className="arrow arrow-1"></span>
        <span className="arrow arrow-2"></span>
        <span className="arrow arrow-3"></span>

        <div className="customer-pic">
          <img src="/static/images/viewbox/01-3.png" alt=""/>
        </div>
        <div className="smart-push-pic">
          <img src="/static/images/viewbox/02-3.png" alt=""/>
        </div>
        <div className="op-pic">
          <img src="/static/images/viewbox/05-3.png" alt=""/>
        </div>
        <div className="dsp-pic">
          <img src="/static/images/viewbox/03-3.png" alt=""/>
        </div>
        <div className="client-pic">
          <img src="/static/images/viewbox/06-3.png" alt=""/>
        </div>
        <div className="fast-app-pic">
          <div className="desc">
            <div className="card">
              <p className="title">品牌认证+短信赋能</p>
              <p className="desc">智能短信公众号</p>
              <p className="content">企业认证</p>
              <p className="content">短信卡片</p>
              <p className="content">场景按钮</p>
              <p className="content">短信菜单</p>
            </div>
            <div className="card">
              <p className="title">场景推送+富媒体消息</p>
              <p className="desc">5G消息</p>
              <p className="content">短信跟随</p>
              <p className="content">挂机推送</p>
              <p className="content">位置推送</p>
            </div>
            <div className="card">
              <p className="title">快应用服务</p>
              <p className="desc">快应用</p>
              <p className="content">即点即用</p>
              <p className="content">免安装</p>
              <p className="content">免存储</p>
              <p className="content">一步激活</p>
            </div>
          </div>
        </div>




        <style lang="less" jsx>{styles}</style>
      </div>
    )


  }
}
