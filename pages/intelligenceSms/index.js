import React from 'react'
import SectionCard from '@/components/sectionCard'
import ProblemItem from '@/components/problemItem'
import TabBarCard from '@/components/tabBarCard'
import ProductBanner from '@/components/productBanner'
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
      ],
      coreList: [
        {
          src: '/static/images/intelligenceSms/icon-duanxinyanzheng.png',
          title: '短信来源号码进行可信认证'
        },
        {
          src: '/static/images/intelligenceSms/icon-kapian.png',
          title: '核心内容可进行卡片化展示，简洁清晰'
        },
        {
          src: '/static/images/intelligenceSms/icon-zhineng.png',
          title: '根据场景可智能匹配按钮一键跳转后续服务'
        },
        {
          src: '/static/images/intelligenceSms/icon-service3.png',
          title: '短信公众号短信页面享受更多服务'
        },
        {
          src: '/static/images/intelligenceSms/icon-shape.png',
          title: '支持跳转 H5、APP、快应用一键拨号、验证码复制'
        }
      ],
      tabBarList: [
        {
          id: 1,
          name: '企业认证'
        },
        {
          id: 2,
          name: '短信卡片'
        },
        {
          id: '3',
          name: '场景按钮'
        },
        {
          id: '4',
          name: '短信菜单'
        }
      ]
    }
  }
  render () {
    const {problems, products, coreList, tabBarList} = this.state
    return (
      <>
        <ProductBanner title={'智能短信'} desc={'带你了解短信新形态，体验营销新玩法'} src={'/static/images/intelligenceSms/banner.png'}></ProductBanner>
        <SectionCard title={'你的场景消息通常会遇到的问题'} bgc={"#fff"} >
          <div className="w clearfix problem">
            {
              problems.map((item, index) => <ProblemItem src={item.src} num={problems.length} title={item.title} key={index}></ProblemItem>)
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
              <TabBarCard list={tabBarList} width={'815px'}></TabBarCard>
              <div className="tab-content clearfix">
                  <div className="tab-content__left">
                    <div>
                      <p>本地解析智能识别企业名称、LOGO 每条成功触达用户的短信提供品牌展示效果 企业认证区别长串数字 提升用户信任度 提高短信打开阅读率</p>
                      <div className="tab-content__left__btn">马上合作</div></div>
                  </div>
                  <div className="tab-content__right clearfix">
                    <div className="tab-content__right__item">
                      <img src="/static/images/intelligenceSms/zhaohang.png" />
                      <p>其他样例</p>
                    </div>
                    <div className="tab-content__right__item">
                      <img src="/static/images/intelligenceSms/jianhang.png" />
                      <p>企业认证</p>
                    </div>
                    <div  className="tab-content__right__img">
                      <img src="/static/images/intelligenceSms/jianhang-scale.png" />
                    </div>
                  </div>
              </div>
            </div>
        </SectionCard>
        <SectionCard title={'产品优势'} bgc={'#F8FAFF'}>
            <div className="product clearfix">
              {products.map((item, index) => (
                <div className="product__item" key={index}>
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
