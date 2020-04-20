import React from 'react'
import Banner from '@/components/banner'
import styles from './index.less'
import SectionCard from '@/components/sectionCard'
import SolutionCard from '@/components/solutionCard'
import CompanyLogo from '@/components/companyLogo'
import Slider from "react-slick";

import NewsCard from '@/components/newsCard'
import axios from 'axios'
import Link from 'next/link'

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30,right:0}} src="/static/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30,left:0}} src="/static/images/left.png"/>
  )
}

export default class Index extends React.Component {
  static async getInitialProps({Component, router, ctx}) {
    try {
      const {data:{data:{list}}} = await axios.get('http://php.bjdglt.com:8091/V1.4/news/getlist')
      return {news: list}
    }catch (e) {
      return {news:[]}
    }

  }
  state ={
    companies:[
      {src:'/static/images/京东@2x.png'},
      {src:'/static/images/淘宝@2x.png'},
      {src:'/static/images/苏宁@2x.png'},
      {src:'/static/images/图层 28@2x.png'},
      {src:'/static/images/屈臣氏@2x.png'},
      {src:'/static/images/建设银行@2x.png'},
      {src:'/static/images/建设银行@2x.png'},
      {src:'/static/images/招商银行@2x.png'},
      {src:'/static/images/百度@2x.png'},
      {src:''},
      {src:''},
      {src:''},
    ],
    smsImage: {
      'defaultImage': '/static/images/index/泰迪银行-智能短信.png',
      'read-more': '/static/images/index/泰迪银行卡片-查看原文.png',
      'my-account': '/static/images/index/泰迪银行-我的账户.png',
      'account-card': '/static/images/index/泰迪银行-信用卡.png',
      'touzhi-licai': '/static/images/index/泰迪银行-投资理财.png',
      'view-application': '/static/images/index/泰迪银行-查看应用.png',
      'dae-cundan': '/static/images/index/泰迪银行-大额存单.png'
    },
    smsActiveImage: 'defaultImage',
    scenicActiveImage: 'defaultImage',
    scenicImage: {
      'defaultImage': '/static/images/index/场景消息.png',
      'read-more': '/static/images/index/泰迪银行卡片-查看原文.png',
      'my-account': '/static/images/index/泰迪银行-我的账户.png',
      'account-card': '/static/images/index/泰迪银行-信用卡.png',
      'touzhi-licai': '/static/images/index/泰迪银行-投资理财.png',
      'view-application': '/static/images/index/泰迪银行-查看应用.png',
      'dae-cundan': '/static/images/index/泰迪银行-大额存单.png'
    },
    quickImage: {
      'defaultImage': '/static/images/index/快应用2.png',
      'power-bank': '/static/images/index/快应用3.png'
    },
    quickActiveImage: 'defaultImage'
  }
  changeSmsImage = (type) => {
    this.setState({
      smsActiveImage: type
    }, () => {
      setTimeout(() => {
        this.setState({
          smsActiveImage: 'defaultImage'
        })
      }, 3000);
    })
  }
  changeScenicImage = (type) => {
    this.setState({
      scenicActiveImage: type
    }, () => {
      setTimeout(() => {
        this.setState({
          scenicActiveImage: 'defaultImage'
        })
      }, 3000);
    })
  }
  changeQuickImage = (type) => {
    this.setState({
      quickActiveImage: type
    }, () => {
      setTimeout(() => {
        this.setState({
          quickActiveImage: 'defaultImage'
        })
      }, 3000);
    })
  }
  render () {
    const {companies, smsImage, smsActiveImage, scenicImage, scenicActiveImage, quickActiveImage, quickImage} = this.state
    const {news} = this.props
    const quickApps = [
      '/static/images/index/快应用1.png',
      '/static/images/index/快应用2.png',
      '/static/images/index/快应用3.png',
      '/static/images/index/快应用4.png',
      '/static/images/index/快应用5.png'
    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      // dotsClass:'slick-dots teddy-dots',
      autoplay: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    }
    return (
      <>
        <Banner />
        <section style={{backgroundColor:'#f7f7f7'}}>
          <div className="w product">
           <div className="product__desc">
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
            <img src="/static/images/center-pic.png" alt="" className="center-pic"/>
          </div>
        </section>
        <section className="feature-left">
          <div className="w feature-content">
            <div className="feature-image">
              <img src={smsImage[smsActiveImage]} alt=""/>
              {smsActiveImage === 'defaultImage' && <div>
                {/* 查看原文 */}
                <div className="read-more" onClick={this.changeSmsImage.bind(this, 'read-more')}></div>
                {/* 查看应用 */}
                <div className="view-application" onClick={this.changeSmsImage.bind(this, 'view-application')}></div>
                {/* 大额存单 */}
                <div className="dae-cundan" onClick={this.changeSmsImage.bind(this, 'dae-cundan')}></div>
                {/* 我的用户 */}
                <div className="my-account" onClick={this.changeSmsImage.bind(this, 'my-account')}></div>
                {/* 信用卡 */}
                <div className="account-card" onClick={this.changeSmsImage.bind(this, 'account-card')}></div>
                {/* 投资理财 */}
                <div className="touzhi-licai" onClick={this.changeSmsImage.bind(this, 'touzhi-licai')}></div>
              </div>}
              <p className="click-tip-text">点击可体验</p>
            </div>
            <div className="text">
              <h2>智能短信</h2>
              <h3>新短信、新营销</h3>
              <p>马上通过 <a href="/intelligenceSms">智能短信</a> 了解更多效果转化新玩法</p>
            </div>
          </div>
        </section>
        <section className="feature-right">
          <div className="w feature-content">
            <div className="text">
              <h2>5G消息</h2>
              <h3>多形式、效率高、全场景、 省成本</h3>
              <p>马上通过 <a href="/scenicProduct">5G消息</a> 了解更多效果转化新玩法</p>
            </div>
            <div className="feature-image scenic-image">
              <img src={scenicImage[scenicActiveImage]} alt=""/>
              {scenicActiveImage === 'defaultImage' && <div>
                {/* 查看原文 */}
                <div className="read-more" onClick={this.changeScenicImage.bind(this, 'read-more')}></div>
                {/* 查看应用 */}
                <div className="view-application" onClick={this.changeScenicImage.bind(this, 'view-application')}></div>
                {/* 大额存单 */}
                <div className="dae-cundan" onClick={this.changeScenicImage.bind(this, 'dae-cundan')}></div>
                {/* 我的用户 */}
                <div className="my-account" onClick={this.changeScenicImage.bind(this, 'my-account')}></div>
                {/* 信用卡 */}
                <div className="account-card" onClick={this.changeScenicImage.bind(this, 'account-card')}></div>
                {/* 投资理财 */}
                <div className="touzhi-licai" onClick={this.changeScenicImage.bind(this, 'touzhi-licai')}></div>
              </div>}
              <p className="click-tip-text">点击可体验</p>
            </div>
          </div>
        </section>
        <section className="feature-left">
          <div className="w feature-content">
            <div className="feature-image">
              <Slider {...settings}>
                <img src="/static/images/numberProduct/core1.png" alt=""/>
                <img src="/static/images/numberProduct/core2.png" alt=""/>
                <img src="/static/images/numberProduct/core3.png" alt=""/>
              </Slider>
            </div>
            <div className="text">
              <h2>号码认证</h2>
              <h3>来电接的安心，去电不再被拒绝</h3>
              <p>马上通过 <a href="/numberAuth">号码认证</a> 进行认证申请</p>
            </div>
          </div>
        </section>
        <section className="feature-right">
          <div className="w feature-content">
            <div className="text">
              <h2>快应用</h2>
              <h3>免安装、免存储、一键直达、更新直接推送</h3>
              <p>马上通过 <a href="/quickAppProduct">快应用</a> 解锁更多营销新玩法</p>
            </div>
            <div className="feature-image">
              <img src={quickImage[quickActiveImage]} />
              {quickActiveImage === 'defaultImage' && <div>
                <div className="quick-app-click" onClick={this.changeQuickImage.bind(this, 'power-bank')}></div>
              </div>}
              {/* <Slider {...settings}>
                {quickApps.map((item, idx) =>
                  (
                    <React.Fragment key={idx}>
                      <img src={item} alt=""/>
                    </React.Fragment>
                  )
                )}
              </Slider> */}
              <p className="click-tip-text">点击可体验</p>
            </div>
          </div>
        </section>
        <SectionCard title={'为不同行业提供专业的全场景营销解决方案'} bgc={"#F8FAFF"} >
          <div className="solution-card-wrap">
            <Link href={'/case/insurance'}>
              <div>
                <SolutionCard src={'/static/images/jr.png'} title={'银行/保险'}/>
              </div>
            </Link>
            <Link href={'/case/operator'}>
              <div>
              <SolutionCard src={'/static/images/运营商@2x.png'} title={'运营商'}/>
              </div>
            </Link>
            <Link href={'/case/education'}>
              <div>
              <SolutionCard src={'/static/images/互联网@2x.png'} title={'互联网'}/>
              </div>
            </Link>
            <Link href={'/case/resale'}>
              <div>
              <SolutionCard src={'/static/images/新零售@2x.png'} title={'快消品'}/>
              </div>
            </Link>
            <Link href={'/case/finance'}>
              <div>
              <SolutionCard src={'/static/images/互联网金融@2x.png'} title={'新零售'}/>
              </div>
            </Link>
            <Link href={'/case/e-commerce'}>
              <div>
              <SolutionCard src={'/static/images/电商@2x.png'} title={'电商'}/>
              </div>
            </Link>
          </div>
        </SectionCard>
        <SectionCard title={'覆盖主流手机厂商'} desc={'泰迪熊移动利用自身强大的技术优势，与OPPO、vivo、魅族、金立、联想、乐视、酷派、阿里YunOS等国内主流手机厂商\n进行了深度合作，累计覆盖终端7亿+，日活用户4亿。'}>
          <img className="cp" src="/static/images/合作厂商@2x.png" alt=""/>
          <div className="cp--match">
            <img src="/static/images/index__logo.png" />
          </div>
        </SectionCard>
        <SectionCard title={'这些成功的企业正在使用泰迪熊移动'} bgc={'#F7F7F7'} desc={'泰迪熊移动成立于2014年，已为京东、淘宝、苏宁、携程、屈臣氏、建设银行、招商银行、百度、三大运营商等国内百家企业提供大数据和场景服务，覆盖快消品、电商、零售、互联网、运营商、手机厂商、金融、旅游、教育等数十个行业，助力客户建设场景生态。'} overflow={true} >
          <div className="company-card-wrap">
            {
              companies.map((i,idx)=><CompanyLogo styleNum={idx} logoSrc={i.src} key={idx} />)
            }
          </div>
        </SectionCard>

        <SectionCard title={'热点资讯'}>
          <div className="news-wrap">
            <Slider {...settings}>
            {news.map((item, idx) => <NewsCard item={item} key={idx} customClassName="index-news-card" />)}
            </Slider>
          </div>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
