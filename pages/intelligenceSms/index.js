import React from 'react'
import Footer from '@/components/footer'
import SectionCard from '@/components/sectionCard'
import ProblemItem from '@/components/problemItem'
import styles from './index.less'

export default class IntelligenceSms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: '/static/images/intelligenceSms/icon-renzheng.png',
          title: '短信未被认证 被拦截率高'
        },
        {
          src: '/static/images/intelligenceSms/icon-fuza.png',
          title: '内容繁杂 用户打开率低 '
        },
        {
          src: '/static/images/intelligenceSms/icon-gongneng.png',
          title: '通知类短信 功能单一 '
        },
        {
          src: '/static/images/intelligenceSms/icon-zifu.png',
          title: '短信内容篇幅 受到字符限制 '
        },
        {
          src: '/static/images/intelligenceSms/icon-zhuanhua.png',
          title: '短信营销转化 效果差 '
        },
        {
          src: '/static/images/intelligenceSms/icon-fasong.png',
          title: '营销短信 发送量受限'
        }
      ],
      products: [
        {
          src: '/static/images/intelligenceSms/icon-accurate.png',
          title: '精确度高',
          desc: '拥有独创的短信语义识别引擎。'
        },
        {
          src: '/static/images/intelligenceSms/icon-sample.png',
          title: '样本丰富',
          desc: '每天解析32亿条短信。'
        },
        {
          src: '/static/images/intelligenceSms/icon-service.png',
          title: '精准提供服务',
          desc: '能够基于自然语义解析技术，根据用户场景，精准提供服务。'
        },
        {
          src: '/static/images/intelligenceSms/icon-cover.png',
          title: '高效覆盖',
          desc: '号码、卡片、内容精准识别。'
        },
        {
          src: '/static/images/intelligenceSms/icon-put-in.png',
          title: '投放可控',
          desc: '投放可控、稳定、快速。'
        },
        {
          src: '/static/images/intelligenceSms/icon-private.png',
          title: '隐私保护',
          desc: '符合GDPR要求，保护用户隐私。'
        },
        {
          src: '/static/images/intelligenceSms/icon-intercept.png',
          title: '降低拦截率',
          desc: '文案、模板预审流程，降低拦截率。'
        },
        {
          src: '/static/images/intelligenceSms/icon-change.png',
          title: '提升转化率',
          desc: '一键直达，缩短用户办理路径，提升转化率。'
        }
      ]
    }
  }
  render () {
    const {problems, products} = this.state
    return (
      <>
        <section className="banner">
            <div className="banner-content">
              <div className="banner__desc">
                <h1 className="banner__desc__title">智能短信</h1>
                <p className="banner__desc__content">带你了解短信新形态，体验营销新玩法</p>
              </div>
              <img className="banner__img" src="/static/images/intelligenceSms/banner.png" />
            </div>
        </section>
        <SectionCard title={'你的场景消息通常会遇到的问题'} bgc={"#fff"} >
          <div className="w clearfix problem">
            {
              problems.map((item, index) => <ProblemItem src={item.src} num={problems.length} title={item.title}></ProblemItem>)
            }
          </div>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <div className="core-content w clearfix">
            <img src="/static/images/sms.png" />
            <div className="core-content__list">
              <div className="core-content__item active clearfix">
                <img src="/static/images/scenicProduct/icon-changshang.png"/>
                <p className="core-content__item__text">厂商网络OTT通道发送：发送成本更低，降低投诉风险</p>
              </div>
              <div className="core-content__item clearfix">
                <img src="/static/images/scenicProduct/icon-xiaoxi.png"/>
                <p className="core-content__item__text">富媒体消息 ：快应用、视频、音频、语音、多图文、位置等多原画形态，提高用户体验的同时能够促进营销短信的效果转化。 </p>
              </div>
              <div className="core-content__item clearfix">
                <img src="/static/images/scenicProduct/icon-chufa.png"/>
                <p className="core-content__item__text">基于用户使用场景触发消息推送 ：精准营销，效率提升</p>
              </div>
              <div className="core-content__item clearfix">
                <img src="/static/images/scenicProduct/icon-zhineng.png"/>
                <p className="core-content__item__text">支持 chatbot：智能客服 ，智能推送消息</p>
              </div>
            </div>
          </div>
        </SectionCard>
        <SectionCard title={'应用形态'} bgc={'#fff'}>

        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
            <div className="product clearfix">
              {products.map(item => (
                <div className="product__item">
                  <div className="product__item-content">
                    <div><img src={item.src} /></div>
                    <p className="product__item__title">{item.title}</p>
                    <p className="product__item__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </SectionCard>
        <Footer />

        <style jsx>{styles}</style>
      </>
    )
  }
}