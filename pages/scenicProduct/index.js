import React from 'react'
import Footer from '@/components/footer'
import SectionCard from '@/components/sectionCard'
import ProblemItem from '@/components/problemItem'
import styles from './index.less'

export default class ScenicProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: [
        {
          src: '/static/images/scenicProduct/icon-chengben.png',
          title: '成本高'
        },
        {
          src: '/static/images/scenicProduct/icon-neirong.png',
          title: '内容受字符限制'
        },
        {
          src: '/static/images/scenicProduct/icon-lanjie.png',
          title: '被拦截率高'
        },
        {
          src: '/static/images/scenicProduct/icon-tuiguang.png',
          title: '推广效果差'
        },
        {
          src: '/static/images/scenicProduct/icon-tiyancha.png',
          title: '用户体验差'
        }
      ],
      products: [
        {
          src: '/static/images/scenicProduct/cost.png',
          title: '节省成本',
          desc: '消息升级，价格更低，节省短信成本。'
        },
        {
          src: '/static/images/scenicProduct/limit.png',
          title: '突破限制',
          desc: '突破传统短信字符限制。'
        },
        {
          src: '/static/images/scenicProduct/effect.png',
          title: '提高效率',
          desc: '降低短信拦截率、投诉率。'
        },
        {
          src: '/static/images/scenicProduct/remain.png',
          title: '短信留存',
          desc: '消息留存在短信列表中。'
        },
        {
          src: '/static/images/scenicProduct/marketing.png',
          title: '精准营销',
          desc: '场景触发，营销更精准。'
        },
        {
          src: '/static/images/scenicProduct/experience.png',
          title: '体验提升',
          desc: '富媒体消息，营销短信多元化， 用户体验提升，功能承载更多。'
        }
      ],
      coreList: [
        {
          src: '/static/images/scenicProduct/icon-changshang.png',
          title: '厂商网络OTT通道发送：发送成本更低，降低投诉风险'
        },
        {
          src: '/static/images/scenicProduct/icon-xiaoxi.png',
          title: '富媒体消息 ：快应用、视频、音频、语音、多图文、位置等多原画形态，提高用户体验的同时能够促进营销短信的效果转化。 '
        },
        {
          src: '/static/images/scenicProduct/icon-chufa.png',
          title: '基于用户使用场景触发消息推送 ：精准营销，效率提升'
        },
        {
          src: '/static/images/scenicProduct/icon-zhineng.png',
          title: '支持 chatbot：智能客服 ，智能推送消息'
        }
      ]
    }
  }
  render () {
    const {problems, products, coreList} = this.state
    return (
      <>
        <section className="banner">
            <div className="banner-content w">
              <div className="banner__desc">
                <h1 className="banner__desc__title">场景消息</h1>
                <p className="banner__desc__content">场景消息——千人千面的智慧场景营销服务</p>
              </div>
              <img className="banner__img" src="/static/images/scenicProduct/banner.png" />
            </div>
        </section>
        <SectionCard title={'你的场景消息通常会遇到的问题'} bgc={"#fff"} >
          <div className="w clearfix problem">
            {
              problems.map((item, index) => <ProblemItem src={item.src} title={item.title} key={index}></ProblemItem>)
            }
          </div>
        </SectionCard>
        <SectionCard title={'核心功能'} bgc={"#F8FAFF"} >
          <div className="core-content w clearfix">
            <img src="/static/images/sms.png" />
            <div className="core-content__list">
              {
                coreList.map((item, index) => (
                  <div key={index} className={`core-content__item clearfix ${index === 0 ? 'active' : ''}`}>
                    <div className="core-content__item__img-wrap">
                      <img src={item.src} />
                    </div>
                    <p className="core-content__item__text">{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </SectionCard>
        <SectionCard title={'应用形态'} bgc={'#fff'}>
          <div>
              <ul className="tab-bar clearfix">
                <li className="tab-bar__item active">卡片</li>
                <li className="tab-bar__item">多图文</li>
                <li className="tab-bar__item">视频</li>
                <li className="tab-bar__item">音频</li>
                <li className="tab-bar__item">位置快应用</li>
              </ul>
              <div className="tab-content clearfix">
                  <div className="tab-content__left">
                    <div>
                      <p>文案文案文案文案文案文案 文案文案文案文案文案文案文案文 文案文案文案文案文案文案文案文案文 文案文案文案文案文案文案文案 文案文案文案文案文案文案文案文案文 </p>
                      <div className="tab-content__left__btn">马上合作</div></div>
                  </div>
                  <div className="tab-content__right clearfix">
                    <div className="tab-content__right__item">
                      <img src="/static/images/intelligenceSms/zhaohang.png" />
                      <p>其他样例</p>
                    </div>
                    <div className="tab-content__right__item">
                      <img src="/static/images/intelligenceSms/jianhang.png" />
                      <p>卡片</p>
                    </div>
                    <div  className="tab-content__right__img">
                      <img src="/static/images/intelligenceSms/jianhang-scale.png" />
                    </div>
                  </div>
              </div>
            </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
            <div className="product">
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

        <style jsx>{styles}</style>
      </>
    )
  }
}
