import {Component} from 'react'
import Slider from "react-slick";
import TabBarCard from '@/components/tabBarCard'
import SectionCard from '@/components/sectionCard'
import styles from './index.less'

// 自定义箭头
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="/static/images/right.png"/>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className} onClick={onClick} style={{width:18,height:30}} src="/static/images/left.png"/>
  )
}
export default class Solution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabBarList: [{
        active: true,
        name: '银行/保险',
        type: 'bank'
      }, {
        active: false,
        name: '运营商',
        type: 'operator'
      }, {
        active: false,
        name: '互联网',
        type: 'net'
      }, {
        active: false,
        name: '新零售',
        type: 'new-retail'
      }, {
        active: false,
        name: '快消品',
        type: 'FMCG'
      }, {
        active: false,
        name: '电商',
        type: 'e-commerce'
      }],
      solutions: {
        'bank': {
          images: [
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png',
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png'
          ],
          industryDesc: '依托泰迪熊移动自研核心技术产品，赋能银行/保险业，升级传统短信，如为金融企业提供品牌认证、短信菜单等功能，助推金融机构提高普惠金融效率。',
          worthDesc: '为金融企业解决传统短信功能单一、触达即结束等问题； 为银行/保险企业提供品牌认证服务； 符合GDPR要求，保护用户隐私； 一键直达，缩短用户办理路径，提升转化率。'
        },
        'operator': {
          images: [
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png',
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png'
          ],
          industryDesc: '泰迪熊移动自研智能短信产品，通过短信卡片功能打破70个字符限制，为运营商提供用户服务赋能，降低用户阅读成本，提升用户体验。',
          worthDesc: '通过短信卡片功能，打破传统短信70个字符限制； 提升用户体验； 卡片、内容精准识别、高效覆盖； 保护用户隐私。'
        },
        'net': {
          images: [
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png',
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png'
          ],
          industryDesc: '赋能电商行业短信营销，打破传统短信字数限制的同时，降低电商企业营销短信拦截率，专业的技术运营团队实时响应，保障客户服务质量。',
          worthDesc: '打破传统短信70个字符限制； 投放可控、稳定、快速； 文案、模板预审流程，降低拦截率； 专业运营团队根据数据报告，优化菜单文案、链接配置，提升用户体验；'
        },
        'new-retail': {
          images: [
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png',
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png'
          ],
          industryDesc: '赋能新零售企业，打通线上线下营销，在传统短信的基础上进行升级，为新零售企业提供线上营销渠道，同时通过场景营销，助力新零售企业线下营销。',
          worthDesc: '产品功能手机终端出厂自带，无需下载、关注； 为新零售企业提供品牌认证服务； 号码、卡片、内容精准识别、高效覆盖。'
        },
        'FMCG': {
          images: [
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png',
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png'
          ],
          industryDesc: '通过泰迪熊移动自研产品技术，赋能快消品行业，为快消品行业提供高效粉丝维护及用户需求收集渠道，一键链接企业与用户。',
          worthDesc: '解决传统短信功能单一、触达即结束等问题； 海量流量，覆盖OPPO、vivo全量机型；70%主流手机厂商； 提升用户体验，保护用户隐私。'
        },
        'e-commerce': {
          images: [
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png',
            '/static/images/solution/teddy-bank.png',
            '/static/images/solution/teddy-bank2.png'
          ],
          industryDesc: '赋能电商行业短信营销，打破传统短信字数限制的同时，降低电商企业营销短信拦截率，专业的技术运营团队实时响应，保障客户服务质量。',
          worthDesc: '打破传统短信70个字符限制； 投放可控、稳定、快速； 文案、模板预审流程，降低拦截率； 专业运营团队根据数据报告，优化菜单文案、链接配置，提升用户体验；'
        }
      },
      activeType: 'bank'
    }
  }
  tabBarClick = (idx, row) => {
    const {tabBarList} = this.state
    tabBarList.forEach((item, index) => {
      if(idx === index) {
        item.active = true
      } else {
        item.active = false
      }
    })
    let activeType = row.type
    this.setState({
      tabBarList: [...tabBarList],
      activeType: activeType
    })
  }
  render() {
    const {tabBarList, solutions, activeType} = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
      <>
        <div className="banner">
          <div className="banner__text w">
            解决方案
          </div>
        </div>
        <div className="solution">
          <div className="w">
            <div className="solution__tab-bar">
              <TabBarCard list={tabBarList} customClassName={'solution-tab-bar'} clickCallback={this.tabBarClick}></TabBarCard>
            </div>
            <div className="solution__content clearfix">
              <div className="solution__content__slider">
                <Slider {...settings}>
                  {solutions[activeType] && solutions[activeType].images.map((item, index) => (
                    <img key={index} src={item} className="solution__content__img" />
                  ))}
                </Slider>
              </div>
              <div className="solution__content__info">
                <ul className="info__list">
                  <li className="info__list__item">
                    <div className="info__list__item__img">
                      <img src="/static/images/solution/icon-hangyefuneng.png" />
                      <span>行业赋能</span>
                    </div>
                    <p className="info__list__item__desc">{solutions[activeType] && solutions[activeType]['industryDesc']}</p>
                  </li>
                  <li className="info__list__item">
                    <div className="info__list__item__img">
                      <img src="/static/images/solution/icon-jiazhidian.png" />
                      <span>价值点</span>
                    </div>
                    <p className="info__list__item__desc">{solutions[activeType] && solutions[activeType]['worthDesc']}</p>
                  </li>
                </ul>
                <div className="solution__content__info__btn">马上合作</div>
              </div>
            </div>
          </div>
        </div>
        <SectionCard title={'合作伙伴'} bgc={'#F8FAFF'}>
          <div className="partner">
            <ul className="partner__list clearfix">
              {
                new Array(9).fill({}).map((item, idx) => (
                  <li className="partner__list__item" key={idx}>
                    <img className="partner__list__item__img" src="/static/images/solution/jingdong.png" />
                  </li>
                ))
              }
            </ul>
          </div>
        </SectionCard>
        <style jsx>{styles}</style>
      </>
    )
  }
}
