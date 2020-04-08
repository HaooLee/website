import React from 'react'
import Banner from '@/components/banner'
import styles from './index.less'
import SectionCard from '@/components/sectionCard'
import SolutionCard from '@/components/solutionCard'
import CompanyLogo from '@/components/companyLogo'
import NewsCard from '@/components/newsCard'
import axios from 'axios'
// import {FormattedMessage} from 'react-intl'

export default class Index extends React.Component {
  static async getInitialProps({Component, router, ctx}) {
    const {data} = await axios.get('http://php.bjdglt.com:8091/V1.4/news/getinfo')
    return {news: data.data}
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
      ]
  }
  render () {
    const {companies} = this.state
    const {news} = this.props
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
               <p className="desc">场景消息</p>
               <p className="content">短信跟随</p>
               <p className="content">挂机推送</p>
               <p className="content">位置推送</p>

             </div>
             <div className="card">
               <p className="title">快应用服务</p>

             </div>

           </div>
            <img src="/static/images/center-pic.png" alt="" className="center-pic"/>
          </div>
        </section>
        <section className="feature-left">
          <div className="w feature-content">
            <img src="/static/images/sms.png" alt=""/>
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
              <h2>场景消息</h2>
              <h3>多形式、效率高、全场景、 省成本</h3>
              <p>马上通过 <a href="/scenicProduct">场景消息</a> 了解更多效果转化新玩法</p>
            </div>
            <img src="/static/images/senceMsg.png" alt=""/>
          </div>
        </section>
        <section className="feature-left">
          <div className="w feature-content">
            <img src="/static/images/号码认证@2x.png" alt=""/>
            <div className="text">
              <h2>号码认证</h2>
              <h3>来电接的安心，去电不再被拒绝</h3>
              <p>马上通过 <a href="/numberAuth">号码认证</a> 解锁</p>
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
            <img src="/static/images/sms.png" alt=""/>
          </div>
        </section>
        <SectionCard title={'为不同行业提供专业的全场景营销解决方案'} bgc={"#F8FAFF"} >
          <div className="solution-card-wrap">
            <SolutionCard src={'/static/images/jr.png'} title={'银行/保险'}/>
            <SolutionCard src={'/static/images/运营商@2x.png'} title={'运营商'}/>
            <SolutionCard src={'/static/images/互联网@2x.png'} title={'互联网'}/>
            <SolutionCard src={'/static/images/新零售@2x.png'} title={'快消品'}/>
            <SolutionCard src={'/static/images/互联网金融@2x.png'} title={'新零售'}/>
            <SolutionCard src={'/static/images/电商@2x.png'} title={'电商'}/>
          </div>
        </SectionCard>
        <SectionCard title={'覆盖主流手机厂商'} desc={'泰迪熊移动利用自身强大的技术优势，与OPPO、vivo、魅族、金立、联想、乐视、酷派、阿里YunOS等国内主流手机厂商\n进行了深度合作，累计覆盖终端7亿+，日活用户4亿。'}>
          <img className="cp" src="/static/images/合作厂商@2x.png" alt=""/>
          <div className="cp--match">
            <img src="/static/images/index__logo.png" />
          </div>
        </SectionCard>
        <SectionCard title={'这些成功的企业正在使用泰迪熊移动'} bgc={'#F7F7F7'} desc={'泰迪熊移动成立于2014年，已为京东、淘宝、苏宁、携程、屈臣氏、建设银行、招商银行、百度等国内百家企业提供大数据和场景服务，\n' +
        '覆盖快消、电商、零售、互联网、手机厂商、金融、旅游、教育等数十个行业，助力客户建设场景生态。'} overflow={true} >
          <div className="company-card-wrap">
            {
              companies.map((i,idx)=><CompanyLogo styleNum={idx} logoSrc={i.src} key={idx} />)
            }
          </div>
        </SectionCard>

        <SectionCard title={'热点资讯'}>
          <div className="news-wrap">
            {news.map((item, idx) => <NewsCard item={item} key={idx} />)}
          </div>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
