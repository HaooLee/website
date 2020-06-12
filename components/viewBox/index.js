import Slider from "react-slick";
import React from "react";
import styles from './index.less'
import TextTransform from '@/components/textTransform'
import Link from 'next/link'
export default class ViewBox extends React.Component {
  constructor(props) {
    super(props)
  }

  timer = 0
  componentDidMount(){
    this.timer = setInterval(()=>{
    const {activeIndex} = this.state
      this.setState({
        activeIndex: activeIndex >=6 ? 0 : activeIndex + 1
      })
    },1500)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  state = {
    activeIndex:0
  }

  render() {
    const {activeIndex} = this.state

    return (
      <>
        <div className="product" onDragStart={()=>false}>

          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
          <span className="line line-4"></span>
          <span className="line line-5"></span>
          <span className="line line-6"></span>
          <span className="line line-7"></span>
          <span className="line line-8"></span>
          <span className="line line-9"></span>
          <span className="line line-10"></span>
          <span className="line line-11"></span>
          <span className="line line-12"></span>
          <span className="line line-13"></span>

          <span className="arrow arrow-1"></span>
          <span className="arrow arrow-2"></span>
          <span className="arrow arrow-3"></span>
          <span className="arrow arrow-4"></span>
          <span className="arrow arrow-5"></span>
          <span className="arrow arrow-6"></span>
          <span className="arrow arrow-7"></span>
          <span className="arrow arrow-8"></span>
          <span className="arrow arrow-9"></span>
          <span className="arrow arrow-10"></span>

          <div className={`customer-pic ${activeIndex == 0 ? 'active':''}` }>
            {/*<img src="https://img.teddymobile.cn/www/images/viewbox/01-3.png" alt=""/>*/}
            <div className={'card'}>
              <p className={'title'}>广告主/B端客户</p>
              <p className={'content'}>场景赋能 - 场景构建 - 场景融合服务</p>
            </div>
          </div>
          <div className={`smart-push-pic ${activeIndex == 1 ? 'active':''}`}>
            {/*<img src="https://img.teddymobile.cn/www/images/viewbox/02-3.png" alt=""/>*/}
            <div className={'card'}>
              <p className={'title'}>巧推智慧营销平台</p>
              <p className={'content'}>高效提升  品牌营销</p>
              <p className={'content'}>营销拓客  运营管理</p>
            </div>
          </div>
          <div className={`op-pic ${activeIndex ==5 ? 'active':''}`}>
            <div className="op-wrap">
              <img src="https://img.teddymobile.cn/www/images/viewbox/arrow-1.png" alt=""/>
              <img src="https://img.teddymobile.cn/www/images/viewbox/arrow-2.png" alt=""/>
              <img src="https://img.teddymobile.cn/www/images/viewbox/arrow-3.png" alt=""/>
              <img src="https://img.teddymobile.cn/www/images/viewbox/arrow-4.png" alt=""/>
              <p>场景-行业-媒体覆盖,数据化精准运营</p>
              <div className={"card card-1"}>
                <p className={"title"}>程序化广告服务</p>
              </div>
              <div className={"card card-2"}>
                <p className={"title"}>DMP数据管理平台</p>
                <p className={"desc"}>流量分析+人群标签 <img src="https://img.teddymobile.cn/www/images/viewbox/trigon-1.png" alt=""/></p>
                <p className={"desc"}>媒体<img src="https://img.teddymobile.cn/www/images/viewbox/trigon-2.png" alt=""/>DSP智能出价模型<img src="https://img.teddymobile.cn/www/images/viewbox/trigon-3.png" alt=""/>媒体</p>
              </div>

              <div className={"card card-3"}>
                <p className={"title"}>DSP一站式投放平台</p>
                <span className={"desc desc-1"}>数据整合</span>
                <span className={"desc desc-2"}>数据分析</span>
                <span className={"desc desc-3"}>流量投放</span>
                <span className={"desc desc-4"}>数据应用</span>
                <img src="https://img.teddymobile.cn/www/images/viewbox/c.png" alt=""/>
              </div>
              <div className={"card card-4"}>
                <p className={"title"}>供给资源 移动终端</p>
                <p className={"desc"}>媒介服务 网络消息</p>
                <p className={"desc"}>厂商服务 智能短信</p>
                <p className={"desc"}>联盟服务</p>
                <p className={"desc"}>APP服务</p>
              </div>

            </div>
            {/*<img src="https://img.teddymobile.cn/www/images/viewbox/05-3.png" alt=""/>*/}
          </div>
          <div className={`dsp-pic ${activeIndex == 4 ? 'active':''}`}>
            {/*<img src="https://img.teddymobile.cn/www/images/viewbox/03-3.png" alt=""/>*/}
            <div className={'card'}>
              <p className={'title'}>全域场景增量营销平台</p>
              <p className={'content'}>用户增长  服务支持</p>
            </div>
          </div>
          <div className={`client-pic ${activeIndex == 3  || activeIndex == 6? 'active':''}`}>
            {/*<img src="https://img.teddymobile.cn/www/images/viewbox/06-3.png" alt=""/>*/}
            <div className={'card'}>
              <p className={'title'}>终端用户</p>
            </div>
          </div>
          <div className={`fast-app-pic ${activeIndex ==2 ? 'active':''}`}>
            <div className="desc">
              <div className="card">
                <p className="title">品牌认证+短信赋能</p>
                <p className="desc">智能短信</p>
                <p className="content">企业认证</p>
                <p className="content">短信卡片</p>
                <p className="content">场景按钮</p>
                <p className="content">短信菜单</p>
              </div>
              <div className="card">
                <p className="title">场景推送+富媒体消息</p>
                <p className="desc">5G场景消息</p>
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
        </div>
        <div className={'mobile-center'}>
          <img src="https://img.teddymobile.cn/www/images/index/mobile-center.png" alt=""/>
        </div>
        <style lang="less" jsx>{styles}</style>
      </>
    )


  }
}
