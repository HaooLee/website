import React from 'react'
import Banner from '@/components/banner'
import styles from './index.less'
import SectionCard from '@/components/sectionCard'
import SolutionCard from '@/components/solutionCard'
import CompanyLogo from '@/components/companyLogo'
import ViewBox from '@/components/viewBox'
import Slider from "react-slick"
import Head from 'next/head'
import NewsCard from '@/components/newsCard'
import axios from 'axios'
import Link from 'next/link'

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30,right:0}} src="http://img.teddymobile.cn/www/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30,left:0}} src="http://img.teddymobile.cn/www/images/left.png"/>
  )
}

export default class Index extends React.Component {
  static async getInitialProps({Component, router, ctx}) {
    try {
      const {data:{data:{list}}} = await axios.get('http://test-bg-td.teddymobile.cn/V1.4/news/getlist')
      return {news: list}
    }catch (e) {
      return {news:[]}
    }

  }
  state ={
    companies:[
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_01.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_02.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_03.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_04.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_05.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_06.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_07.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_08.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_09.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_10.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_11.png'},
      {src:'http://img.teddymobile.cn/www/images/index/LOGO_12.png'},
    ],
    smsImage: {
      'defaultImage': 'http://img.teddymobile.cn/www/images/index/泰迪银行-智能短信.png',
      'read-more': 'http://img.teddymobile.cn/www/images/index/泰迪银行卡片-查看原文.png',
      'my-account': 'http://img.teddymobile.cn/www/images/index/泰迪银行-我的账户.png',
      'account-card': 'http://img.teddymobile.cn/www/images/index/泰迪银行-信用卡.png',
      'touzhi-licai': 'http://img.teddymobile.cn/www/images/index/泰迪银行-投资理财.png',
      'view-application': 'http://img.teddymobile.cn/www/images/index/泰迪银行-查看应用.png',
      'dae-cundan': 'http://img.teddymobile.cn/www/images/index/泰迪银行-大额存单.png'
    },
    smsActiveImage: 'defaultImage',
    scenicActiveImage: 'defaultImage',
    scenicImage: {
      'defaultImage': 'http://img.teddymobile.cn/www/images/index/1.png',
      // 'read-more': 'http://img.teddymobile.cn/www/images/index/泰迪银行卡片-查看原文.png',
      'my-account': 'http://img.teddymobile.cn/www/images/index/泰迪银行-我的账户.png',
      'account-card': 'http://img.teddymobile.cn/www/images/index/泰迪银行-信用卡.png',
      'touzhi-licai': 'http://img.teddymobile.cn/www/images/index/2.png',
      'touzhi-licai-footer': 'http://img.teddymobile.cn/www/images/index/泰迪银行-投资理财.png',
      'account-card-footer': 'http://img.teddymobile.cn/www/images/index/泰迪银行-信用卡.png',
      // 'view-application': 'http://img.teddymobile.cn/www/images/index/泰迪银行-查看应用.png',
      // 'dae-cundan': 'http://img.teddymobile.cn/www/images/index/泰迪银行-大额存单.png'
    },
    quickImage: {
      'defaultImage': 'http://img.teddymobile.cn/www/images/index/快应用2.png',
      'power-bank': 'http://img.teddymobile.cn/www/images/index/快应用3.png'
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
      'http://img.teddymobile.cn/www/images/index/快应用1.png',
      'http://img.teddymobile.cn/www/images/index/快应用2.png',
      'http://img.teddymobile.cn/www/images/index/快应用3.png',
      'http://img.teddymobile.cn/www/images/index/快应用4.png',
      'http://img.teddymobile.cn/www/images/index/快应用5.png'
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
        <Head>
          <title>泰迪熊移动——智慧通讯服务提供商</title>
          <meta name="keywords" content="泰迪熊移动,智能短信,5G场景消息,快应用,号码认别,智慧通讯服务" />
          <meta name="description" content="泰迪熊移动以智能连接人与服务为使命，专注于提供基于大数据和场景的智能服务。公司以智能短信、号码识别、5G场景消息、快应用等产品为主导，致力于成为客户信赖的智慧通讯服务提供商。"/>
        </Head>
        <Banner />
        <section style={{backgroundColor:'#f7f7f7'}}>
          <div className="w">
            <ViewBox />
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
              <h2>5G场景消息</h2>
              <h3>多形式、效率高、全场景、 省成本</h3>
              <p>马上通过 <a href="/scenicProduct">5G场景消息</a> 了解更多效果转化新玩法</p>
            </div>
            <div className="feature-image scenic-image">
              <img src={scenicImage[scenicActiveImage]} alt=""/>
              {scenicActiveImage === 'defaultImage' && <div>
                {/* 查看原文 */}
                {/* <div className="read-more" onClick={this.changeScenicImage.bind(this, 'read-more')}></div> */}
                {/* 查看应用 */}
                <div className="touzhi-licai-footer" onClick={this.changeScenicImage.bind(this, 'touzhi-licai-footer')}></div>
                {/* 大额存单 */}
                <div className="account-card-footer" onClick={this.changeScenicImage.bind(this, 'account-card-footer')}></div>
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
                <img src="http://img.teddymobile.cn/www/images/numberProduct/core1.png" alt=""/>
                <img src="http://img.teddymobile.cn/www/images/numberProduct/core2.png" alt=""/>
                <img src="http://img.teddymobile.cn/www/images/numberProduct/core3.png" alt=""/>
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
                <SolutionCard src={'http://img.teddymobile.cn/www/images/jr.png'} title={'银行/保险'}/>
              </div>
            </Link>
            <Link href={'/case/operator'}>
              <div>
              <SolutionCard src={'http://img.teddymobile.cn/www/images/运营商@2x.png'} title={'运营商'}/>
              </div>
            </Link>
            <Link href={'/case/education'}>
              <div>
              <SolutionCard src={'http://img.teddymobile.cn/www/images/互联网@2x.png'} title={'互联网'}/>
              </div>
            </Link>
            <Link href={'/case/resale'}>
              <div>
              <SolutionCard src={'http://img.teddymobile.cn/www/images/新零售@2x.png'} title={'快消品'}/>
              </div>
            </Link>
            <Link href={'/case/finance'}>
              <div>
              <SolutionCard src={'http://img.teddymobile.cn/www/images/互联网金融@2x.png'} title={'新零售'}/>
              </div>
            </Link>
            <Link href={'/case/e-commerce'}>
              <div>
              <SolutionCard src={'http://img.teddymobile.cn/www/images/电商@2x.png'} title={'电商'}/>
              </div>
            </Link>
          </div>
        </SectionCard>
        <SectionCard title={'覆盖主流手机厂商'} desc={'泰迪熊移动利用自身强大的技术优势，与OPPO、vivo、魅族、金立、联想、乐视、酷派、阿里YunOS等国内主流手机厂商\n进行了深度合作，累计覆盖终端7亿+，日活用户4亿。'}>
          <img className="cp" src="http://img.teddymobile.cn/www/images/合作厂商@2x.png" alt=""/>
          <div className="cp--match">
            <img src="http://img.teddymobile.cn/www/images/index__logo.png" />
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
